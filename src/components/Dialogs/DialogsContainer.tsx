import React, {ChangeEvent} from "react";
import dialogsModule from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    AddPostActionType,

    sendMessageActionCreator,
    updateNewMessageActionCreator,
    UpdateNewPostActionType
} from "../../redux/state";
import {DialogsDataType, MessagesDataType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
    newMessageBody: string
    //store: any
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const {dialogsData, messagesData, dispatch, newMessageBody} = props

    const onTextAreaChanged = (changedText: string) => {
        dispatch(updateNewMessageActionCreator(changedText))
    };

    const onClickHandler = () => dispatch(sendMessageActionCreator())

    return (
        <Dialogs dialogsData={dialogsData}
                 messagesData={messagesData}
                 newMessageBody={newMessageBody}
                 sendMessage={onClickHandler}
                 onTextAreaChanged={onTextAreaChanged}
        />
    );
};


export default DialogsContainer;
