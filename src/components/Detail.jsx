import { useState } from "react";
import "../index.css";
import { WebpayForm } from "./WebpayForm.jsx";
import { useEffect } from "react";


export const Detail = ({ order, allProducts, commerce_code, total }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(
      "https://qqj8zu-3001.csb.app/webpay_plus_mall/create",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commerce_code,
          order,
          allProducts,
          total,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => setInfo(result));
  }, []);

  // console.log("token", info);

  // console.log("url", url);

  // console.log("hola", allProducts);
  return (
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
      <WebpayForm url={info.url} token={info.token} />
    </div>
  );
};
