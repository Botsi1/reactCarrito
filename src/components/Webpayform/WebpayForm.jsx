import React, { useState } from "react";
import "./WebPay.css";

export const WebpayForm = ({ url, token }) => {
  return (
    <form className="form" action={url} method="POST">
      <input type="hidden" name="token_ws" value={token} />
      <input className="input" type="submit" value="Pagar" />
    </form>
  );
};
