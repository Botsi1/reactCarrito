const initialState = {
  vci: "",
  amount: "",
  token: "",
  urlReturn: "",
  isntallments_number: "",
  response_code: undefined,
  card_detail: "",
  transaction_date: "",
  payment_type_code: "",
  commerce_code: undefined,
};
import { BUY_PRODUCT, COMMIT, STATUS, REFUND } from "./action.js";

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_PRODUCT: {
      return {
        token: action.payload.token,
        urlReturn: action.payload.url,
      };
    }
    case COMMIT: {
      return {
        vci: action.payload.commitResponse.vci,
        amount: action.payload.commitResponse.details[0].amount,
        installments_number:
          action.payload.commitResponse.details[0].installments_number,
        response_code: action.payload.commitResponse.details[0].response_code,
        card_detail: action.payload.commitResponse.card_detail.card_number,
        transaction_date: action.payload.commitResponse.transaction_date,
        payment_type_code:
          action.payload.commitResponse.details[0].payment_type_code,
        commerce_code: action.payload.commitResponse.details[0].commerce_code,
      };
    }
    case STATUS: {
      console.log("desde el reducer status", action.payload);
    }
    case REFUND: {
      console.log("desde refund", action.payload);
    }

    default:
      return state;
  }
}
