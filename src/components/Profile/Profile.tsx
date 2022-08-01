import React from "react";
import ProfileModule from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ProfilePageType, UpdateNewPostActionType} from "../../redux/state";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

const Profile: React.FC<ProfileType> = ({profilePage, dispatch}) => {

    return (
        <div className={ProfileModule["content"]}>
            <ProfileInfo/>
            <MyPosts postsData={profilePage.postsData}
                     dispatch={dispatch}
                     newPostText={profilePage.newPostText}
            />
        </div>
    );
};

export default Profile;
