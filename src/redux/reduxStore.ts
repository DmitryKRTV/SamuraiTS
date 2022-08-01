import {combineReducers, createStore} from "@reduxjs/toolkit"
import profileReducer, {ProfilePageType} from "./profileReducer";
import dialogsReducer, {DialogsPageType} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

type StoreType = {
    subscribe: () => void
    replaceReducer: () => void
    getState: () => void
    dispatch: () => void
    observable: () => any
}

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: {};
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

const store = createStore(reducers)

export default store
