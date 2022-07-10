import React from "react";
import dialogsModule from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

export type dialogsDataType = {
    id: string
    name: string
}

export type messagesDataType = {
    id: string
    title: string
}


const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messagesData}) => {


    return (
        <div className={dialogsModule["dialogs"]}>
            <div className={dialogsModule["dialogs-items"]}>
                {dialogsData.map((i) => {
                    return (
                        <DialogItem name={i.name} id={i.id} key={i.id}/>
                    )
                })}
            </div>
            <div className={dialogsModule["messages"]}>
                {messagesData.map((i) => {
                    return (
                        <Message title={i.title} key={i.id}/>
                    )
                })}
            </div>
        </div>
    );
};


export default Dialogs;
