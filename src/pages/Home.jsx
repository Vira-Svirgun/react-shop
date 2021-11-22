import React from "react";
import Card from "../components/Card/index";

function Home({
  items,
  searchValue,
  cartItems,
  addToCart,
  addToFavorite,
  changeSearchValue,
  setSearchValue,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        addToFavorite={(obj) => addToFavorite(obj)}
        addToCart={(obj) => addToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div>
      <div className="content">
        <div className="content__searchBlock">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все бейсболки"}
          </h1>
          <div className="search">
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src="img/btn-remove.svg"
                alt="Clear"
              ></img>
            )}
            <img className="search__img" src="img/search.svg" alt="Search" />
            <input
              onChange={changeSearchValue}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="content__container">{renderItems()}</div>
      </div>
    </div>
  );
}

export default Home;
