import {v1} from "uuid";
import {AddPostActionType, UpdateNewPostActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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

export type DialogsDispatchType = (action: AddPostActionType | UpdateNewPostActionType) => void

const initialState: DialogsPageType = {
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
}


export const dialogsReducer = (state: DialogsPageType = initialState,
                               action: AddPostActionType | UpdateNewPostActionType) => {


    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: v1(),
                title: state.newMessageBody,
            }
            state.messagesData.push(newMessage)
            state.newMessageBody = ""
            break

        case UPDATE_NEW_MESSAGE_BODY:
            if (action.changedText || action.changedText === "") {
                state.newMessageBody = action.changedText;
            }
            break


    }

    return state
}

export default dialogsReducer;