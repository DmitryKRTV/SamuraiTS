import {v1} from "uuid";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
export type PostsDataType = {
    id: string
    message: string
    likes: number
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>

type finalActionType = UpdateNewPostActionType | AddPostActionType

export type ProfileDispatchType = (action: finalActionType) => void

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
                        action: finalActionType) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                return {
                    ...state,
                    postsData: [{id: v1(), message: state.newPostText, likes: 0}, ...state.postsData],
                    newPostText: "",
                }
            }
            return state

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.changedText
            };
    }
    return state
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updateNewPostAC = (changedText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        changedText: changedText,
    } as const
}

export default profileReducer;