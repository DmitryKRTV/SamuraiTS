import {v1} from "uuid";
import {renderEntireTree} from "../render";


let state = {
    profilePage: {
        postsData: [
            {
                id: v1(),
                message: "Holla",
                likes: 5
            },
            {
                id: v1(),
                message: "It's post",
                likes: 2
            },
            {
                id: v1(),
                message: "Yo",
                likes: 4
            },
        ],
    },
    dialogsPage: {
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
        ]
    },
    sidebar: {},
}

export const addPost = (postMessage: string) => {
    const newPost = {
        id: v1(),
        message: postMessage,
        likes: 0,
    }
    state.profilePage.postsData.push(newPost)
    renderEntireTree(state, addPost);
}

export default state
