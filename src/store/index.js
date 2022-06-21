import {applyMiddleware, combineReducers, createStore} from "redux";
import {movies} from "./reducers/movies";
import {todos} from "./reducers/todos";
import {ricky} from "./reducers/ricky";
import {shop} from "./reducers/shop";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    movies,
    todos,
    ricky,
    shop,
}), composeWithDevTools(applyMiddleware(thunk)))
