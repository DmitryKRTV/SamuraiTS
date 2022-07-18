import React from "react";
import "./index.css";
import App from "./App";
import {root} from "./index";


export const renderEntireTree = (state: any, addPost: any) => {
    root.render(
        <React.StrictMode>
            <App postsData={state.profilePage.postsData}
                 dialogsData={state.dialogsPage.dialogsData}
                 messagesData={state.dialogsPage.messagesData}
                 addPost={addPost}
            />
        </React.StrictMode>
    );
}