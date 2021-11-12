import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <div className="card__favorite">
        <img width={14.5} height={13} src="/img/unlike.png" alt="Unliked" />
      </div>
      <img className="card__img" src="/img/b1.PNG" alt="Beisbolka"></img>
      <h5>Бейсболка Cap-Double 50453213 10213366 01 410</h5>
      <div className="cardBottom">
        <div className="cardBottom__info">
          <span>Цена:</span>
          <b>1 180,00 грн.</b>
        </div>
        <button className="cardBottom__btn">
          <img
            className="cardBottom__btn-img"
            src="/img/plus.svg"
            alt="Plus"
          ></img>
        </button>
      </div>
    </div>
  );
};
