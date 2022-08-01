import {AddPostActionType, DialogsPageType, StateType, UpdateNewPostActionType} from "./state";
import {v1} from "uuid";
import profileReducer from "./profileReducer";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const dialogsReducer = (state: DialogsPageType,
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