import {legacy_createStore,combineReducers,Middleware, applyMiddleware} from "redux"
import {reducer as appReducer} from "./app/reducer"
import {reducer as authReducer} from "./auth/reducer"
import thunk from "redux-thunk"

const rootReducer =combineReducers({
    appReducer,authReducer
})

const store= legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}