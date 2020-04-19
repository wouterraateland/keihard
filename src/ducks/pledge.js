import { createReducer, createAsyncActionType } from "./util";

// Action types
export const UPDATE = "pledge/UPDATE";
export const SUBMIT = createAsyncActionType("pledge/SUBMIT");

// Action creators
export const update = (field, value) => ({
  type: UPDATE,
  payload: { [field]: value },
});

export const submit = () => ({
  type: SUBMIT.REQUEST,
  payload: {},
});

// Reducers
export const reducer = createReducer(
  {
    name: "",
    email: "",
    amount: 25,
    payment_method: "PayPal",
    who: "both",
  },
  {
    [UPDATE]: (state, payload) => ({
      ...state,
      ...payload,
    }),
    [SUBMIT.SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
  }
);

export default reducer;
