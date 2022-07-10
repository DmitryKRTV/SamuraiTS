import React from "react";
import {NavLink} from "react-router-dom";
import {IsActiveType} from "../../Navbar/Navbar";
import dialogsModule from "../Dialogs.module.css";

const ActiveLink = ({isActive}: IsActiveType) => isActive ? dialogsModule["active"] : dialogsModule["item"]

export type DialogItemType = {
    id: string
    name: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} className={ActiveLink}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;