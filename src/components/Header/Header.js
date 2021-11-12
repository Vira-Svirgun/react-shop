import React from "react";

export const Header = () => {
  return (
    <div>
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
            <img className="headerRight__cart" src="/img/cart.svg" alt=""></img>
            <span>1200 р.</span>
          </li>
          <li>
            <img className="headerRight__user" src="/img/user.svg" alt=""></img>
          </li>
        </ul>
      </header>
    </div>
  );
};
