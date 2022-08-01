import {v1} from "uuid";
import {AddPostActionType, UpdateNewPostActionType} from "./state";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}
export type PostsDataType = {
    id: string;
    message: string;
    likes: number
}

const initialState: ProfilePageType = {
    postsData: [
        {
            id: v1(),
            message: "Holla",
            likes: 5
        },
        {
            id: v1(),
            message: "It's post",
            likes: 2
        },
        {
            id: v1(),
            message: "Yo",
            likes: 4
        },
    ],
    newPostText: "it-kamasutra.com"
}

const profileReducer = (state: ProfilePageType = initialState,
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