import React, { useState } from "react";
import axios from "axios";
import styles from "./Drawer.module.scss";
import CartInfo from "../CartInfo";
import { useCart } from "../../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, cartOpened, items = [] }) {
  const { cartItems, setCartItems, totalPrice } = useCart();

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isOrderId, setIsOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6190de0941928b001768fea3.mockapi.io/orders",
        { items: cartItems }
      );
      setIsOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; cartItems.lenght > i; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://6190de0941928b001768fea3.mockapi.io/cart" + items.id
        );
        await delay(1000);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.drawer}>
          <h2>
            Корзина
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="Close"
              width="20px"
              height="20px"
              onClick={onClose}
            ></img>
          </h2>

          {items.length > 0 ? (
            <>
              <div className={styles.items}>
                {items.map((obj) => (
                  <div key={obj.id} className={styles.item}>
                    <img
                      src={obj.imageUrl}
                      className={styles.item__img}
                      alt="Items"
                    ></img>
                    <div className={styles.item__list}>
                      <p>{obj.title}</p>
                      <b>{obj.price} грн.</b>
                      <div>
                        <img
                          onClick={() => onRemove(obj.id)}
                          className={styles.removeBtn}
                          src="/img/btn-remove.svg"
                          alt="Remove"
                        ></img>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.bottom}>
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} грн.</b>
                  </li>
                  <li>
                    <span>Доставка 5%:</span>
                    <div></div>
                    <b>{Math.ceil(totalPrice * 0.05)} грн.</b>
                  </li>
                </ul>
                <button
                  disabled={isLoading}
                  onClick={onClickOrder}
                  className={styles.greenBtn}
                >
                  Оформить заказ
                  <img src="/img/arrow.svg" alt="Arrow" />
                </button>
              </div>
            </>
          ) : (
            <CartInfo
              title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
              description={
                isOrderComplete
                  ? `Ваш заказ #${isOrderId} скоро будет передан курьерской доставке`
                  : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              }
              imgUrl={
                isOrderComplete
                  ? "/img/complete-order.jpg"
                  : "/img/empty-cart.jpg"
              }
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Drawer;
