import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, {StateType} from "./redux/reduxStore";
import StoreContext, {Provider} from "./StoreContext";


export const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const renderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </Provider>

        </React.StrictMode>
    );
}
renderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    renderEntireTree(state)
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
