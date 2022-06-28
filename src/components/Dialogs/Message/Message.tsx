import React from "react";
import dialogsModule from "../Dialogs.module.css";

type MessageType = {
    messageBody: string
}

const Message = (props: MessageType) => {
    return (
        <div className={dialogsModule["message"]}>{props.messageBody}</div>
    );
};

export default Message;
