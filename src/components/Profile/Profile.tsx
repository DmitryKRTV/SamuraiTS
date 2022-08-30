import React from "react";
import ProfileModule from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profilePage: ProfilePageType
}

const Profile: React.FC<ProfileType> = ({profilePage}) => {

    return (
        <div className={ProfileModule["content"]}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
