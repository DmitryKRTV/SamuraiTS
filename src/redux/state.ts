import {v1} from "uuid";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export type AddPostActionType = { type: string, changedText?: "" }
export type UpdateNewPostActionType = { type: string, changedText: string }

export type StoreType = {
    _state: StateType;
    renderEntireTree: (state: any) => void;
    getState: () => StateType;
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: {};
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}

export type PostsDataType = {
    id: string;
    message: string;
    likes: number
}

export type DialogsDataType = {
    id: string;
    name: string;
}

export type MessagesDataType = {
    id: string;
    title: string;
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

const oldStore: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: v1(),
                    name: "Dimich"
                },
                {
                    id: v1(),
                    name: "Andrey"
                },
                {
                    id: v1(),
                    name: "Sveta"
                },
                {
                    id: v1(),
                    name: "Sasha"
                },
                {
                    id: v1(),
                    name: "Victor"
                },
                {
                    id: v1(),
                    name: "Valera"
                },
            ],
            messagesData: [
                {
                    id: v1(),
                    title: "Hello"
                },
                {
                    id: v1(),
                    title: "Hi"
                },
                {
                    id: v1(),
                    title: "Yo"
                },
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },

    renderEntireTree(state: any) {
        console.log("State Changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this.renderEntireTree = observer
    },

    dispatch(action: AddPostActionType | UpdateNewPostActionType) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state, action)
        this.renderEntireTree(this._state)
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (changedText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    changedText: changedText,
})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageActionCreator = (changedText: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    changedText: changedText,
})

export default oldStore
