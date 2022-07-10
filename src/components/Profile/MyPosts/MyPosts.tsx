import React from "react";
import MyPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsDataType} from "../Profile";


const MyPosts: React.FC<postsDataType> = ({postsData}) => {

    return (
        <div className={MyPostsModule.myPosts}>
            MyPosts
            <div>
                <textarea></textarea>
                <button>add posts</button>
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
