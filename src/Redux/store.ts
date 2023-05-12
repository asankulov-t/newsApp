import {applyMiddleware, combineReducers, createStore} from "redux";
import { HadLineReducer } from "./HadLineReducer";
import thunkMiddleWare from 'redux-thunk'
import { MostPopularReducer } from "./MostPopularReducer";
import {TopicReducer} from "./TopicReducer";
import {GetDataByCategory} from "./GetDataByCategory";
import ReadMoodReducer from "./ReadMoodReducer";

let reducers=combineReducers({
    HadLineReducer,
    MostPopularReducer,
    TopicReducer,
    GetDataByCategory,
    ReadMoodReducer,
})
let store=createStore(reducers,applyMiddleware(thunkMiddleWare));

export default store;
export type AppRootType=ReturnType<typeof reducers>