import {v1} from "uuid";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export type AddPostActionType = { type: string }
export type UpdateNewPostActionType = { type: string, changedText: string }

export type StoreType = {
    _state: StateType;
    renderEntireTree: () => void;
    getState: () => StateType;
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: {};
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}

export type PostsDataType = {
    id: string;
    message: string;
    likes: number
}

export type DialogsPageType = {
    dialogsData: Array<{ id: string; name: string; }>
    messagesData: Array<{ id: string; title: string; }>
}

const store: StoreType = {
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

    renderEntireTree() {
        console.log("State Changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        store.renderEntireTree = observer
    },

    dispatch(action: { type: string; changedText?: string }) {
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likes: 0,
                }
                this._state.profilePage.postsData.push(newPost)
                this._state.profilePage.newPostText = ""
                store.renderEntireTree();
                break
            case UPDATE_NEW_POST_TEXT:
                if (action.changedText || action.changedText === "") {
                    this._state.profilePage.newPostText = action.changedText;
                }
                store.renderEntireTree();
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (changedText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    changedText: changedText,
})

export default store
