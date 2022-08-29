import React from "react";
import {
    addPostActionCreator,
    AddPostActionType,
    updateNewPostActionCreator,
    UpdateNewPostActionType
} from "../../../redux/state";
import {ProfileDispatchType, PostsDataType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";

export type MyPostsContainerType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}


// const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
//
//     const {postsData, newPostText, dispatch} = props
//
//     const addPost = () => dispatch(addPostActionCreator())
//
//     const onTextareaChange = (changedText: string) => {
//         dispatch(updateNewPostActionCreator(changedText))
//     }
//
//     return (
//         <StoreContext.Consumer>
//             {store => (<MyPosts postsData={postsData}
//                                 newPostText={newPostText}
//                                 updateNewText={onTextareaChange}
//                                 addPost={addPost}
//             />)
//             }
//         </StoreContext.Consumer>
//     );
// };

type mapStateToPropsReturnType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}

type mapDispatchToPropsReturnType = {
    addPost: () => void
    updateNewText: (changedText: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsReturnType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: ProfileDispatchType): mapDispatchToPropsReturnType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewText: (changedText: string) => {
            dispatch(updateNewPostActionCreator(changedText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
