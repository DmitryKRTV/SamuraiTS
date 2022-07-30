import React from "react";
import "./index.css";
import App from "./App";
import {root} from "./index";
import {addPost, updateNewPostText} from "./redux/state";


export const renderEntireTree = (state: any) => {
    root.render(
        <React.StrictMode>
            <App profilePage={state.profilePage}
                 dialogsData={state.dialogsPage.dialogsData}
                 messagesData={state.dialogsPage.messagesData}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>
    );
}