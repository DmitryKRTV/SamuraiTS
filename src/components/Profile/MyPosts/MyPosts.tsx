import React from "react";
import MyPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postExampleType} from "../Profile";

export type MyPostsDataType = {
    postsData: Array<postExampleType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (changedText: string) => void
}


const MyPosts: React.FC<MyPostsDataType> = (props) => {

    const {postsData, addPost, newPostText, updateNewPostText} = props

    let newPostElement: any = React.createRef();

    const addPostHandler = () => {
        addPost()
        updateNewPostText("")
    }

    const onTextareaChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text)
    }

    return (
        <div className={MyPostsModule.myPosts}>
            MyPosts
            <div>
                <textarea ref={newPostElement}
                          value={newPostText}
                          onChange={onTextareaChange}
                ></textarea>
                <button
                    onClick={addPostHandler}
                >add posts
                </button>
            </div>
            <div className={MyPostsModule.itemsContainer}>
                {postsData.map((i) => {
                    return (
                        <Post key={i.id} message={i.message} likes={i.likes}/>
                    )
                })}
            </div>

        </div>
    );
};

export default MyPosts;
