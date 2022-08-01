import React from "react";
import ProfileModule from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, UpdateNewPostActionType} from "../../redux/state";
import {ProfilePageType} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

const Profile: React.FC<ProfileType> = ({profilePage, dispatch}) => {

    return (
        <div className={ProfileModule["content"]}>
            <ProfileInfo/>
            <MyPostsContainer postsData={profilePage.postsData}
                              newPostText={profilePage.newPostText}
                              dispatch={dispatch}
            />
        </div>
    );
};

export default Profile;
