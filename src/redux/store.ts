import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer"
import { TypedUseSelectorHook, useSelector as  useReduxSelector} from "react-redux";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

export type IReduxState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<IReduxState> = useReduxSelector;