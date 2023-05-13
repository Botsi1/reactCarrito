import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";
import { refund } from "../../Redux/action";

const Refund = ({ order }) => {
  const dispatch = useDispatch();
  const { token_ws, amount, commerce_code } = useParams();
  const info = {
    buy_order: order,
    commerce_code,
    token: token_ws,
    amount,
  };

  useEffect(() => {
    dispatch(refund(info));
  }, []);
  return (
    <>
      <h1>Tu compra se ha cancelado</h1>
    </>
  );
};
export default Refund;
