import {AddPostActionType, ProfilePageType, StateType, UpdateNewPostActionType} from "./state";
import {v1} from "uuid";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export const profileReducer = (state: ProfilePageType,
                               action: AddPostActionType | UpdateNewPostActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likes: 0,
            }
            state.postsData.push(newPost)
            state.newPostText = ""
            break

        case UPDATE_NEW_POST_TEXT:
            if (action.changedText || action.changedText === "") {
                state.newPostText = action.changedText;
            }
            break
    }
    return state
}

export default profileReducer;