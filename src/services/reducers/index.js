import { combineReducers } from "redux";
import { productreducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts : productreducer,
    product: selectedProductReducer,
})

export default reducers;