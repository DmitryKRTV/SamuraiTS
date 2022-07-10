import React from "react";
import dialogsModule from "../Dialogs.module.css";

type MessageType = {
    title: string
}

const Message = (props: MessageType) => {
    return (
        <div className={dialogsModule["message"]}>{props.title}</div>
    );
};

export default Message;
