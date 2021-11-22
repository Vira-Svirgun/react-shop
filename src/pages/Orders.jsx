import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../components/Card/index";
import AppContext from "./../context";

function Orders() {
  const { addToCart, addToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://6190de0941928b001768fea3.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="content">
        <h1>Мои заказы</h1>

        <div className="content__container">
          {(isLoading ? [...Array(10)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
