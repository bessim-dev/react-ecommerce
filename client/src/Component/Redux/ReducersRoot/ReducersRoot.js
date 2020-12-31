import { combineReducers } from "redux";
import UserReducer from "../User/UserReducer";
import cartReducer from "../cart/cartReducer";
import ShopReducer from "../shop/shopReducer";
import DirectoryReducer from "../directory/directoryReducer";
import StripeReducer from "../Stripe/Stripe.Reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: UserReducer,
  cart: cartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer,
  stripe: StripeReducer,
});
export default persistReducer(persistConfig, rootReducer);
