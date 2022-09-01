import React from "react";
import {
    ProfileDispatchType,
    PostsDataType,
    addPostAC,
    updateNewPostAC
} from "../../../redux/profileReducer/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";

// export type MyPostsContainerType = {
//     postsData: Array<PostsDataType>
//     newPostText: string
//     dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
// }


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
            dispatch(addPostAC())
        },
        updateNewText: (changedText: string) => {
            dispatch(updateNewPostAC(changedText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
