import axios from "axios";
export const BUY_PRODUCT = "BUY_PRODUCT";
export const COMMIT = "COMMIT";
export const STATUS = "STATUS";
export const REFUND = "REFUND";

export function buyProducts(payload) {
  return async function (dispatch) {
    var result = await axios.post(
      "https://qqj8zu-3001.csb.app/webpay_plus_mall/create",
      payload
    );

    return dispatch({
      type: BUY_PRODUCT,
      payload: result.data,
    });
  };
}

export function commit(payload) {
  return async function (dispatch) {
    var result = await axios.post(
      "https://qqj8zu-3001.csb.app/webpay_plus_mall/commit",
      payload
    );

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
