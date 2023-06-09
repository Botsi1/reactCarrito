import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commit } from "../../Redux/action";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import SuccessfulPurchase from "../SuccessfulPurchase/SuccessfulPurchase";
import FailedPurchase from "../FailedPurchase/FailedPurchase";
import "./commit.css";

export const Commit = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const token_ws = urlParams.get("token_ws");
  const [charge, setCharge] = useState(false);

  const vci = useSelector((state) => state.vci);
  const amount = useSelector((state) => state.amount);
  const payment_code = useSelector((state) => state.payment_type_code);
  const response_code = useSelector((state) => state.response_code);
  const installments_number = useSelector((state) => state.installments_number);
  const card_detail = useSelector((state) => state.card_detail);
  const transaction_date = useSelector((state) => state.transaction_date);
  const commerce_code = useSelector((state) => state.commerce_code);

  const [info, setInfo] = useState({ token_ws });

  useEffect(() => {
    setCharge(true);
    setTimeout(() => {
      setCharge(false);
    }, 5000);
    dispatch(commit(info));
  }, []);

  return (
    <>
      {charge ? (
        <Loader />
      ) : response_code === 0 ? (
        <div className="container-succes">
          <SuccessfulPurchase />
          <Link to={"/status/" + token_ws}>
            <button className=" payButton">Ver estado de la compra</button>
          </Link>
        </div>
      ) : (
        <div className="container-succes">
          <FailedPurchase />
        </div>
      )}
    </>
  );
};
