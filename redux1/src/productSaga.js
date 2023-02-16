import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  let data = yield fetch("https://reqres.in/api/users?page=2");
  data = yield data.json();
  console.log("call api", data);
  yield put({ type: "SET_PRODUCT_LIST", data });
}
function* productSaga() {
  yield takeEvery("PRODUCT_LIST", getProducts);
}

export default productSaga;
