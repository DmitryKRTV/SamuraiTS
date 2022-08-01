import React, {ChangeEvent} from "react";
import MyPostsModule from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    addPostActionCreator,
    AddPostActionType,
    updateNewPostActionCreator,
    UpdateNewPostActionType
} from "../../../redux/state";
import {PostsDataType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

export type MyPostsContainerType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}


const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    const {postsData, newPostText, dispatch} = props

    const addPost = () => dispatch(addPostActionCreator())

    const onTextareaChange = (changedText: string) => {
        dispatch(updateNewPostActionCreator(changedText))
    }

    return (
        <StoreContext.Consumer>
            {store => (<MyPosts postsData={postsData}
                                newPostText={newPostText}
                                updateNewText={onTextareaChange}
                                addPost={addPost}
                                store={store}
            />)
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
