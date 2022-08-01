import React, {ChangeEvent} from "react";
import MyPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    addPostActionCreator,
    AddPostActionType, PostsDataType,
    updateNewPostActionCreator,
    UpdateNewPostActionType
} from "../../../redux/state";

export type MyPostsDataType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}


const MyPosts: React.FC<MyPostsDataType> = (props) => {

    const {postsData, dispatch, newPostText} = props

    const addPostHandler = () => dispatch(addPostActionCreator())


    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostActionCreator(e.currentTarget.value))
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
