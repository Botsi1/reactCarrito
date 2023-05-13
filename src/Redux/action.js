import axios from "axios";
export const BUY_PRODUCT = "BUY_PRODUCT";
export const COMMIT = "COMMIT";
export const STATUS = "STATUS";
export const REFUND = "REFUND";

export function buyProducts(payload) {
  console.log(payload);
  return async function (dispatch) {
    var result = await axios.post(
      "https://qqj8zu-3001.csb.app/webpay_plus_mall/create",
      payload
    );
    console.log("my result", result.data);
    return dispatch({
      type: BUY_PRODUCT,
      payload: result.data,
    });
  };
}

export function commit(payload) {
  console.log(payload);
  return async function (dispatch) {
    var result = await axios.post(
      "https://qqj8zu-3001.csb.app/webpay_plus_mall/commit",
      payload
    );
    console.log("desde el action", result.data);

    return dispatch({
      type: COMMIT,
      payload: result.data,
    });
  };
}

export function status(payload) {
  return async function (dispatch) {
    var result = await axios.post(
      "https://qqj8zu-3001.csb.app/webpay_plus_mall/status",
      payload
    );

    return dispatch({
      type: STATUS,
      payload: result.data,
    });
  };
}

export function refund(payload) {
  return async function (dispatch) {
    var result = await axios.post(
      "https://qqj8zu-3001.csb.app/webpay_plus_mall/refund",
      payload
    );

    return dispatch({
      type: REFUND,
      payload: result.data,
    });
  };
}
