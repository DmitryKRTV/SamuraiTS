import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {postExampleType} from "./components/Profile/Profile";
import Dialogs, {dialogsDataType, messagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

export type profilePageType = {
    postsData: Array<postExampleType>
    newPostText: string
}

type AppPropsType = {
    profilePage: profilePageType
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    addPost: (postMessage: string) => void
    updateNewPostText: (changedText: string) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const {profilePage, dialogsData, messagesData, addPost, updateNewPostText} = props

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile profilePage={profilePage}
                                                 addPost={addPost}
                                                 updateNewPostText={updateNewPostText}
                               />}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
