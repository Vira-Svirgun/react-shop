import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import AppContext from "./context";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponce, cartResponce, favoritesResponce] =
          await Promise.all([
            axios.get("https://6190de0941928b001768fea3.mockapi.io/items"),
            axios.get("https://6190de0941928b001768fea3.mockapi.io/cart"),
            axios.get("https://6190de0941928b001768fea3.mockapi.io/favorites"),
          ]);

        setIsLoading(false);
        setCartItems(cartResponce.data);

        setFavorites(favoritesResponce.data);

        setItems(itemsResponce.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const addToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://6190de0941928b001768fea3.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6190de0941928b001768fea3.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
              return item;
            }
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToFavorite = async (obj) => {
    try {
      const favItem = favorites.find(
        (favObj) => Number(favObj.id) === Number(obj.id)
      );
      if (favItem) {
        axios.delete(
          `https://6190de0941928b001768fea3.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://6190de0941928b001768fea3.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = (id) => {
    try {
      axios.delete(`https://6190de0941928b001768fea3.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        addToFavorite,
        addToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={removeItem}
            cartOpened={cartOpened}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                addToCart={addToCart}
                addToFavorite={addToFavorite}
                changeSearchValue={changeSearchValue}
                setSearchValue={setSearchValue}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
