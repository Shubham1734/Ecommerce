import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,cartReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart:cartReducer,
});
export default reducers;