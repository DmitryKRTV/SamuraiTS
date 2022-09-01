import React, {ChangeEvent} from "react";
import dialogsModule from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {DialogsDataType, MessagesDataType} from "../../redux/dialogsReducer/dialogsReducer";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
    sendMessage: () => void
    onTextAreaChanged: (changedText: string) => void
}

const Dialogs = ({...props}: DialogsPropsType) => {

    const {
        dialogsData,
        messagesData,
        newMessageBody,
        sendMessage,
        onTextAreaChanged
    } = props

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

    const onTextAreaChangedHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onTextAreaChanged(e.currentTarget.value)
    };

    const onClickHandler = () => sendMessage()

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
                          onChange={onTextAreaChangedHandler}
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
