import React, { useContext } from "react";
import Card from "../components/Card/index";
import AppContext from "../context";

function Home() {
  const { favorites, addToFavorite } = useContext(AppContext);

  return (
    <div>
      <div className="content">
        <h1>Мои закладки</h1>

        <div className="content__container">
          {favorites.map((item, index) => (
            <Card
              key={index}
              favorited={true}
              addToFavorite={addToFavorite}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
