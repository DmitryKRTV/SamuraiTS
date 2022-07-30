import React from "react";
import ProfileModule from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../App";

export type ProfileType = {
    profilePage: profilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (changedText: string) => void
}

export type postExampleType = {
    id: string
    message: string
    likes: number
}

const Profile: React.FC<ProfileType> = ({profilePage, addPost, updateNewPostText}) => {

    return (
        <div className={ProfileModule["content"]}>
            <ProfileInfo/>
            <MyPosts postsData={profilePage.postsData}
                     addPost={addPost}
                     newPostText={profilePage.newPostText}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    );
};

export default Profile;
