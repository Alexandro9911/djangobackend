import {combineReducers} from 'redux'
import {authReducer} from "./admin/auth/reducer";
import {modalsAdminReducer} from "./admin/modals/reducer";
import {questionReducer} from "./admin/question/reducer";
import {userReducer} from "./admin/users/reducers";
import {anketeReducer} from "./admin/ankete/reducer";
import {userOfferReducer} from "./offer/user/reducer";
import {offerReducer} from "./admin/offer/reducer";
import {testReducer} from "./offer/test/reducer";
import {statisticReducer} from "./admin/statistic/reducer";

export default combineReducers({
  auth: authReducer,
  adminModals: modalsAdminReducer,
  question: questionReducer,
  user: userReducer,
  ankete: anketeReducer,
  offer: offerReducer,
  userOffer: userOfferReducer,
  statistic: statisticReducer,
  test: testReducer
})