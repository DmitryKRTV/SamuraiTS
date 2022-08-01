import {v1} from "uuid";

let store = {
    _state: {
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
            newPostText: "it-kamasutra.com"
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
    },
    getState() {
        return this._state;
    },
    renderEntireTree() {
        console.log("State Changed")
    },
    addPost() {
        const newPost = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ""
        store.renderEntireTree();
    },
    updateNewPostText(changedText: string) {
        this._state.profilePage.newPostText = changedText;
        store.renderEntireTree();
    },
    subscribe(observer: () => void) {
        store.renderEntireTree = observer
    },
}

export default store
