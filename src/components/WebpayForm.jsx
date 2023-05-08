import React, { useState } from "react";

export const WebpayForm = ({ url, token }) => {
  console.log("mi Url", url);
  console.log(" mi token", token);
  return (
    <form action={url} method="POST">
      <input type="hidden" name="token_ws" value={token} />
      <input type="submit" value="Pagar" />
    </form>
  );
};
