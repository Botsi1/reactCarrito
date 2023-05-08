import { useState } from "react";
import { Header } from "./components/Header";
import { Detail } from "./components/Detail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Commit } from "./components/Commit";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const order = "O-" + Math.floor(Math.random() * 10000) + 1;
  const commerce_code = 12345;

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
          commer_code={commerce_code}
          total={total}
        />
      ),
    },
    {
      path: "commit",
      element: <Commit />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
