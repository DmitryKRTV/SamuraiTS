import {v1} from "uuid";

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

export type sendMessageActionType = ReturnType<typeof sendMessageAC>
export type updateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

type finalActionType = sendMessageActionType | updateNewMessageActionType

export type DialogsDispatchType = (action: finalActionType) => void

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
                               action: finalActionType) => {


    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageBody) {
                return {
                    ...state,
                    messagesData: [{id: v1(), title: state.newMessageBody}, ...state.messagesData],
                    newMessageBody: "",
                }
            }
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.changedText
            }
    }

    return state
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageAC = (changedText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        changedText: changedText,
    } as const
}

export default dialogsReducer;