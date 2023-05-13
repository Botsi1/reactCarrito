import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";
import { status } from "../../Redux/action";

const Status = () => {
  const { token_ws } = useParams();

  const token = {
    token: token_ws,
  };

  const dispatch = useDispatch();

  const [charge, setCharge] = useState(false);

  // useEffect(() => {
  //   console.log("mi token", token);
  // }, [token_ws]);
  useEffect(() => {
    setCharge(true);
    setTimeout(() => {
      setCharge(false);
    }, 2000);
    dispatch(status(token));
  }, []);

  return <>{charge ? <Loader /> : <h5>{token_ws}</h5>}</>;
};

export default Status;
