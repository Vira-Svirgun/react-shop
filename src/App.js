import React from "react";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img className="headerLeft__logo" src="/img/logo.png" alt="" />
          <div>
            <h3>Baseball caps</h3>
            <p>Магазин лучших бейсболок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img
              className="headerRight__cart"
              src="/img/premium-icon-shopping-trolley-2220455.png"
              alt=""
            ></img>
            <span>1200 р.</span>
          </li>
          <li>
            <img
              className="headerRight__user"
              src="/img/premium-icon-user-3334284.png"
              alt=""
            ></img>
          </li>
        </ul>
      </header>

      <div className="content">
        <h1>Все бейсболки</h1>
        <div className="content__container">
          <div className="card">
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
                  src="/img/plus.png"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img className="card__img" src="/img/b2.PNG" alt="Beisbolka"></img>
            <h5>Бейсболка 023429 01 Puma Black/Puma Black</h5>
            <div className="cardBottom">
              <div className="cardBottom__info">
                <span>Цена:</span>
                <b>647,00 грн.</b>
              </div>
              <button className="cardBottom__btn">
                <img
                  className="cardBottom__btn-img"
                  src="/img/plus.png"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img className="card__img" src="/img/b3.PNG" alt="Beisbolka"></img>
            <h5>Бейсболка Trucker Cap 023428 Black 01</h5>
            <div className="cardBottom">
              <div className="cardBottom__info">
                <span>Цена:</span>
                <b>619,00 грн.</b>
              </div>
              <button className="cardBottom__btn">
                <img
                  className="cardBottom__btn-img"
                  src="/img/plus.png"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img className="card__img" src="/img/b4.PNG" alt="Beisbolka"></img>
            <h5>Бейсболка Trucker Cap 023428 02 Peacoat</h5>
            <div className="cardBottom">
              <div className="cardBottom__info">
                <span>Цена:</span>
                <b>619,00 грн.</b>
              </div>
              <button className="cardBottom__btn">
                <img
                  className="cardBottom__btn-img"
                  src="/img/plus.png"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
