import React from "react";
import MyPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postExampleType} from "../Profile";

export type MyPostsDataType = {
    postsData: Array<postExampleType>
    addPost: (postMessage: string) => void
}


const MyPosts: React.FC<MyPostsDataType> = ({postsData, addPost}) => {

    let newPostElement: any = React.createRef();

    const addPostHandler = () => {
        let text = newPostElement.current.value;
        addPost(text)
    }

    return (
        <div className={MyPostsModule.myPosts}>
            MyPosts
            <div>
                <textarea ref={newPostElement}></textarea>
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
