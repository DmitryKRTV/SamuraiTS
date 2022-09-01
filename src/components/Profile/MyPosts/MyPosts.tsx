import React, {ChangeEvent} from "react";
import MyPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/profileReducer/profileReducer";

export type MyPostsDataType = {
    postsData: Array<PostsDataType>
    newPostText: string
    updateNewText: (changedText: string) => void
    addPost: () => void
}


const MyPosts: React.FC<MyPostsDataType> = (props) => {

    const {postsData, updateNewText, addPost, newPostText} = props

    const addPostHandler = () => addPost()


    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewText(e.currentTarget.value)
    }

    return (
        <div className={MyPostsModule.myPosts}>
            MyPosts
            <div>
                <textarea value={newPostText}
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
