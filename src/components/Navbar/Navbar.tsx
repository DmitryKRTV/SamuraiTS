import React from "react";
import NavbarModule from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export type IsActiveType = {
    isActive: boolean
}

const ActiveLink = ({isActive}: IsActiveType) => isActive ? NavbarModule["active"] : NavbarModule["item"]

const Navbar = () => {
    return (
        <div className={NavbarModule["sidebar"]}>
            <div><NavLink to={"/profile"}
                          className={ActiveLink}>Profile</NavLink>
            </div>
            <div><NavLink to={"/dialogs"} className={ActiveLink}>Messages</NavLink></div>
            <div><NavLink to={"/news"} className={ActiveLink}>News</NavLink></div>
            <div><NavLink to={"/music"} className={ActiveLink}>Music</NavLink></div>
            <div><NavLink to={"/settings"} className={ActiveLink}>Settings</NavLink></div>
        </div>
    );
};

export default Navbar;
