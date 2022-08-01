import React, {ChangeEvent} from "react";
import dialogsModule from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    AddPostActionType,
    DialogsDataType,
    MessagesDataType, sendMessageActionCreator,
    updateNewMessageActionCreator,
    UpdateNewPostActionType
} from "../../redux/state";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
    newMessageBody: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {dialogsData, messagesData, dispatch, newMessageBody} = props

    const dialogsElements = dialogsData.map((i) => {
        return (
            <DialogItem name={i.name} id={i.id} key={i.id}/>
        )
    })

    const messagesElements = messagesData.map((i) => {
        return (
            <Message title={i.title} key={i.id}/>
        )
    })

    const onTextAreaChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    };

    const onClickHandler = () => dispatch(sendMessageActionCreator())

    return (
        <div className={dialogsModule["dialogs"]}>
            <div className={dialogsModule["dialogs-items"]}>
                {dialogsElements}
            </div>
            <div className={dialogsModule["messages"]}>
                {messagesElements}
            </div>
            <div>
                <textarea placeholder={"Enter your message"}
                          value={newMessageBody}
                          onChange={onTextAreaChanged}
                ></textarea>
            </div>
            <div>
                <button
                    onClick={onClickHandler}
                >Send
                </button>
            </div>
        </div>
    );
};


export default Dialogs;
