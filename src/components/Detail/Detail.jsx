import { useState } from "react";
import "./detail.css";
import { WebpayForm } from "../Webpayform/WebpayForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyProducts } from "../../Redux/action";
import Loader from "../Loader/Loader";

export const Detail = ({ order, allProducts, commerce_code, total }) => {
  const [charge, setCharge] = useState(false);
  const [info, setInfo] = useState({
    commerce_code,
    buy_order: order,
    allProducts,
    total,
  });

  // console.log("mi info", info);
  const dispatch = useDispatch();
  const url = useSelector((state) => state.urlReturn);
  const token = useSelector((state) => state.token);

  // useEffect(() => {
  //   if (!charge) {
  //     // Solo solicitar datos si no se han cargado previamente
  //     dispatch(buyProducts(info)); // Solicitar datos al backend
  //     setCharge(true); // Actualizar variable de estado
  //   }
  //   console.log("token", token);
  // }, []);

  useEffect(() => {
    dispatch(buyProducts(info));
  }, [dispatch]);

  console.log("token", token);

  return (
    <>
      {charge ? (
        <Loader />
      ) : (
        <div className="ticket-container">
          <div className="ticket">
            <h2>Order #{order}</h2>
            <p>Amount: \${total}</p>
            <ul>
              {allProducts.map((item) => (
                <li key={item.id}>
                  {item.nameProduct} - \${item.price}
                </li>
              ))}
            </ul>
            <WebpayForm url={url} token={token} />
          </div>
        </div>
      )}
    </>
  );
};
