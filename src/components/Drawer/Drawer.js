import React from "react";

export const Drawer = () => {
  return (
    <div>
      <div className="overlay" style={{ display: "none" }}>
        <div className="drawer">
          <h2>
            Корзина
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </h2>

          <div className="items">
            <div className="cartItem">
              <div
                className="cartItem__img"
                style={{ backgroundImage: "url(/img/b1.PNG)" }}
              ></div>
              <div className="cartItem__ list">
                <p>Бейсболка Cap-Double 50453213 10213366 01 410</p>
                <b>1 180,00 грн.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              ></img>
            </div>

            <div className="cartItem">
              <div
                className="cartItem__img"
                style={{ backgroundImage: "url(/img/b1.PNG)" }}
              ></div>
              <div className="cartItem__ list">
                <p>Бейсболка Cap-Double 50453213 10213366 01 410</p>
                <b>1 180,00 грн.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              ></img>
            </div>
          </div>

          <div className="drawer__bottom">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>2 360 грн.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>118 грн.</b>
              </li>
            </ul>
            <button className="greenBtn">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
