import {combineReducers, createStore} from "@reduxjs/toolkit"
import profileReducer, {ProfilePageType} from "./profileReducer";
import dialogsReducer, {DialogsPageType} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: {};
}

export type AppStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

const store = createStore(reducers)

export default store
