import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Detail } from "./components/Detail/Detail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Commit } from "./components/Commit/Commit";
import Status from "./components/Status/Status";

import Refund from "./components/Refund/Refund";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const order = "O-" + Math.floor(Math.random() * 10000) + 1;
  const commerce_code = 597055555536;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          order={order}
          commerce_code={commerce_code}
        />
      ),
    },
    {
      path: "create",
      element: (
        <Detail
          allProducts={allProducts}
          order={order}
          items={allProducts}
          commerce_code={commerce_code}
          total={total}
        />
      ),
    },
    {
      path: "commit",
      element: <Commit />,
    },
    {
      path: "status/:token_ws",
      element: <Status />,
    },
    {
      path: "refund/:token_ws/:amount/:commerce_code",
      element: <Refund order={order} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
