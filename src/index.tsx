import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, {addPost} from "./redux/state"
import {renderEntireTree} from "./render";


export const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// const renderEntireTree = () => {
//     root.render(
//         <React.StrictMode>
//             <App postsData={state.profilePage.postsData}
//                  dialogsData={state.dialogsPage.dialogsData}
//                  messagesData={state.dialogsPage.messagesData}
//                  addPost={addPost}
//             />
//         </React.StrictMode>
//     );
// }

renderEntireTree(state, addPost);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
