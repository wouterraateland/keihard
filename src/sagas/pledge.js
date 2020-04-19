import { call, put, select, takeLatest } from "redux-saga/effects";
import * as Pledge from "ducks/pledge";

async function logPledge(pledge) {
  const res = await fetch("/pledge.php", {
    method: "POST",
    body: JSON.stringify(pledge),
  });

  return res.status === 200 && res.ok;
}

function openPayment(pledge) {
  switch (pledge.payment_method) {
    case "PayPal":
      const win = window.open(
        `https://paypal.me/WouterRaateland/${pledge.amount}`,
        "_blank"
      );
      win.focus();
      break;
    default:
      break;
  }
}

function* processPledge() {
  const pledge = yield select((state) => state.pledge);

  if (pledge.name && pledge.email && pledge.amount) {
    const success = yield call(logPledge, pledge);

    yield put({ type: Pledge.SUBMIT[success ? "SUCCESS" : "FAILURE"] });
    if (success) {
      openPayment(pledge);
    }
  } else {
    yield put({ type: Pledge.SUBMIT.FAILURE });
  }
}

function* saga() {
  yield takeLatest(Pledge.SUBMIT.REQUEST, processPledge);
}

export default saga;
