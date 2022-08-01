import {AddPostActionType, UpdateNewPostActionType} from "./state";

const initialState = {}

export const sidebarReducer = (state = initialState,
                               action: AddPostActionType | UpdateNewPostActionType) => {
    return state
}

export default sidebarReducer;