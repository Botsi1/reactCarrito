import { useEffect } from "react";
import queryString from "query-string";

export const Commit = (props) => {
  const params = props;
  console.log("mis params", params);
  //   useEffect(() => {
  //     fetch("https://qqj8zu-3001.csb.app/webpay_plus_mall/commit", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log("mi data", data))
  //       .catch((error) => console.log("el error", error));
  //   });
  return (
    <>
      <h1>Commit</h1>
    </>
  );
};
