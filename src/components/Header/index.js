import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "./../../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();
  return (
    <div>
      <header>
        <Link to="/">
          <div className={styles.left}>
            <img className={styles.logo} src="img/logo.png" alt="" />
            <div>
              <h3>Baseball caps</h3>
              <p>Магазин лучших бейсболок</p>
            </div>
          </div>
        </Link>
        <ul className={styles.right}>
          <li className={styles.cart} onClick={props.onClickCart}>
            <img
              className={styles.cart__img}
              src="img/cart.svg"
              alt="Cart"
            ></img>
            <span>{totalPrice} грн.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img
                className={styles.favorites}
                src="img/heart.svg"
                alt="Favorites"
              ></img>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <img className={styles.user} src="img/user.svg" alt="User"></img>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;

