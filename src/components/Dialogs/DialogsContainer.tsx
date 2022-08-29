import React, {ChangeEvent} from "react";
import {
    AddPostActionType,
    sendMessageAC,
    updateNewMessageAC,
    UpdateNewPostActionType
} from "../../redux/state";
import {DialogsDataType, DialogsDispatchType, DialogsPageType, MessagesDataType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType, StateType} from "../../redux/reduxStore";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
    newMessageBody: string
    //store: any
}

// const DialogsContainer = ({...props}: DialogsPropsType) => {
//
//     const {dialogsData, messagesData, dispatch, newMessageBody} = props
//
//     const onTextAreaChanged = (changedText: string) => {
//         dispatch(updateNewMessageAC(changedText))
//     };
//
//     const onSendMessageClick = () => dispatch(sendMessageAC())
//
//     return (
//         <Dialogs dialogsData={dialogsData}
//                  messagesData={messagesData}
//                  newMessageBody={newMessageBody}
//                  sendMessage={onSendMessageClick}
//                  onTextAreaChanged={onTextAreaChanged}
//         />
//     );
// };

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
