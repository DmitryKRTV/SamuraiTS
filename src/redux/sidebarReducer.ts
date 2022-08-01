import {AddPostActionType, StateType, UpdateNewPostActionType} from "./state";
import dialogsReducer from "./dialogsReducer";

export const sidebarReducer = (state: StateType,
                               action: AddPostActionType | UpdateNewPostActionType) => {
    return state
}

export default sidebarReducer;