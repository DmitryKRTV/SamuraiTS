import React from "react";
import PostModule from "./Post.module.css";

type PostType = {
    message: string
    likes: number
}

const Post = (props: PostType) => {
    return (
        <div className={PostModule.item}>
            <div><img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png"}/>
            </div>
            <div>{props.message}</div>
            <div className={PostModule.likes}>likes: {props.likes}</div>
        </div>
    );
};

export default Post;
