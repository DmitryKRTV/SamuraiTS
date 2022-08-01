import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddPostActionType, StateType, UpdateNewPostActionType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const {state, dispatch} = props

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile profilePage={state.profilePage}
                                                 dispatch={dispatch}
                               />}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                 messagesData={state.dialogsPage.messagesData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
