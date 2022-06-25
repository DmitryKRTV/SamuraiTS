import React from "react";
import MyPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={MyPostsModule.myPosts}>
            MyPosts
            <div>
                <textarea></textarea>
                <button>add posts</button>
            </div>
            <div className={MyPostsModule.itemsContainer}>
                <Post message={"Holla"} likes={5}/>
                <Post message={"It's post"} likes={2}/>
            </div>

        </div>
    );
};

export default MyPosts;
