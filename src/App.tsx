import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: any
}

const App: React.FC<AppPropsType> = (props) => {
    const {state} = props

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile profilePage={state.profilePage}
                               />}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
