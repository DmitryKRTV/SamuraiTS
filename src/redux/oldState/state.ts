import {v1} from "uuid";
import profileReducer from "../profileReducer/profileReducer";
import dialogsReducer from "../dialogsReducer/dialogsReducer";
import sidebarReducer from "../sidebarReducer/sidebarReducer";
import {StateType} from "../reduxStore";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

type AddPostActionType = { type: string, changedText?: "" }
type UpdateNewPostActionType = { type: string, changedText: string }

type StoreType = {
    _state: StateType;
    renderEntireTree: (state: any) => void;
    getState: () => StateType;
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}


type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}

type PostsDataType = {
    id: string;
    message: string;
    likes: number
}

type DialogsDataType = {
    id: string;
    name: string;
}

type MessagesDataType = {
    id: string;
    title: string;
}

type DialogsPageType = {
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

    dispatch(action: any) { // instead of any: AddPostActionType | UpdateNewPostActionType
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state, action)
        this.renderEntireTree(this._state)
    }

}

const addPostActionCreator = () => ({type: ADD_POST})
const updateNewPostActionCreator = (changedText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    changedText: changedText,
})

const sendMessageAC = () => ({type: SEND_MESSAGE})
const updateNewMessageAC = (changedText: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    changedText: changedText,
})

export default oldStore
