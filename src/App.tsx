import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {postExampleType} from "./components/Profile/Profile";
import Dialogs, {dialogsDataType, messagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


type AppPropsType = {
    postsData: Array<postExampleType>
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

const App: React.FC<AppPropsType> = ({postsData, dialogsData, messagesData}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={postsData}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
