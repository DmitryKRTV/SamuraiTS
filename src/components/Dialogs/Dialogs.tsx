import React from "react";
import dialogsModule from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {v1} from "uuid";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={dialogsModule["dialogs"]}>
            <div className={dialogsModule["dialogs-items"]}>
                <DialogItem name={"Dimich"} id={v1()}/>
                <DialogItem name={"Andrey"} id={v1()}/>
                <DialogItem name={"Sveta"} id={v1()}/>
                <DialogItem name={"Sasha"} id={v1()}/>
                <DialogItem name={"Victor"} id={v1()}/>
                <DialogItem name={"Valera"} id={v1()}/>
            </div>
            <div className={dialogsModule["messages"]}>
                <Message messageBody={"Hello"}/>
                <Message messageBody={"Hi"}/>
                <Message messageBody={"Yo"}/>
            </div>
        </div>
    );
};


export default Dialogs;
