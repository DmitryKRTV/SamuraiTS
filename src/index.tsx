import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, {addPost, subscribe, updateNewPostText} from "./redux/state"


export const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const renderEntireTree = () => {
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
renderEntireTree()
subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
