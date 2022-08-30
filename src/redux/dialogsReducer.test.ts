import {v1} from "uuid";
import dialogsReducer, {DialogsPageType, sendMessageAC, updateNewMessageAC} from "./dialogsReducer";

test("Correct work of profile reducer", () => {
    const startState: DialogsPageType = {
        dialogsData: [
            {
                id: v1(),
                name: "Dimich"
            },
            {
                id: v1(),
                name: "Andrey"
            },
            {
                id: v1(),
                name: "Sveta"
            },
            {
                id: v1(),
                name: "Sasha"
            },
            {
                id: v1(),
                name: "Victor"
            },
            {
                id: v1(),
                name: "Valera"
            },
        ],
        messagesData: [
            {
                id: v1(),
                title: "Hello"
            },
            {
                id: v1(),
                title: "Hi"
            },
            {
                id: v1(),
                title: "Yo"
            },
        ],
        newMessageBody: "",
    }
    const endState: DialogsPageType = dialogsReducer(startState, sendMessageAC())

    const controller = "Dmitry"
    const endState2: DialogsPageType = dialogsReducer(startState, updateNewMessageAC(controller))
    const endState3: DialogsPageType = dialogsReducer(endState2, sendMessageAC())


    expect(endState.messagesData.length).toBe(3)
    expect(endState2.newMessageBody).toBe(controller)
    expect(endState3.messagesData.length).toBe(4)


})