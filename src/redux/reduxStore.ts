import {combineReducers, createStore} from "@reduxjs/toolkit"
import profileReducer, {ProfilePageType} from "./profileReducer/profileReducer";
import dialogsReducer, {DialogsPageType} from "./dialogsReducer/dialogsReducer";
import sidebarReducer from "./sidebarReducer/sidebarReducer";
import {usersReducer} from "./usersReducer/usersReducer";

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
    usersPage: usersReducer,
})

const store = createStore(reducers)

export default store
