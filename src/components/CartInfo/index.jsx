import React, { useContext } from "react";
import AppContext from "../../context";
import styles from "./CartInfo.module.scss";

const CartInfo = ({ title, description, imgUrl }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className={styles.empty}>
      <img className={styles.empty__img} src={imgUrl} alt="Empty cart"></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className={styles.greenBtn}>
        <img src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default CartInfo;
