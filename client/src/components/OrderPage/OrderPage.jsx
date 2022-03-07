import React from "react";
import ChatComponent from "./ChatComponent/ChatComponent";
import OrderInfo from "./OrderInfo/OrderInfo";
import OrderMap from "./OrderMap/OrderMap";

function OrderPage() {

  return (
    <>
      <h2>Страница заказа</h2>
      <OrderMap />
      <OrderInfo />
      <ChatComponent />
    </>
  );
}

export default OrderPage;
