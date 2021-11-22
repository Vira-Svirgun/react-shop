import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "./../../context";

function Card({
  id,
  imageUrl,
  title,
  price,
  addToFavorite,
  addToCart,
  favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onPlusClick = () => {
    addToCart(obj);
  };
  const onFavoriteClick = () => {
    addToFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={200}
          height={250}
          viewBox="0 0 200 250"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="10" y="10" rx="10" ry="10" width="180" height="105" />
          <rect x="10" y="130" rx="3" ry="3" width="180" height="18" />
          <rect x="10" y="210" rx="8" ry="8" width="90" height="32" />
          <rect x="148" y="210" rx="8" ry="8" width="32" height="32" />
          <rect x="10" y="154" rx="3" ry="3" width="140" height="18" />
        </ContentLoader>
      ) : (
        <>
          {addToFavorite && (
            <div onClick={onFavoriteClick} className={styles.favorite}>
              <img
                width={14.5}
                height={13}
                src={isFavorite ? "img/like.png" : "img/unlike.png"}
                alt="Unliked"
                onClick={addToFavorite}
              />
            </div>
          )}
          <img className={styles.img} src={imageUrl} alt="Beisbolka"></img>
          <h5>{title}</h5>
          <div className={styles.bottom}>
            <div>
              <span>Цена:</span>
              <b>{price} грн.</b>
            </div>
            {addToCart && (
              <img
                className={styles.plus}
                src={
                  isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                }
                alt="Plus"
                onClick={onPlusClick}
              ></img>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
