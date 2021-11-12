import React from "react";
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Drawer } from './components/Drawer/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <div className="content__searchBlock">
          <h1>Все бейсболки</h1>
          <div className="search">
            <img className="search__img" src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__container">
         <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
