import React from "react";
import {
    DialogsDataType,
    DialogsDispatchType,
    MessagesDataType,
    sendMessageAC,
    updateNewMessageAC
} from "../../redux/dialogsReducer/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

type mapStateToPropsReturnType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

type mapDispatchToPropsReturnType = {
    sendMessage: () => void
    onTextAreaChanged: (changedText: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsReturnType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch: DialogsDispatchType): mapDispatchToPropsReturnType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        onTextAreaChanged: (changedText: string) => {
            dispatch(updateNewMessageAC(changedText))
        }
    }
}

const DialogsContainer = connect<mapStateToPropsReturnType, mapDispatchToPropsReturnType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
