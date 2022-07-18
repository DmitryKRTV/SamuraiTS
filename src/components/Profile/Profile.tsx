import React from "react";
import ProfileModule from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    postsData: Array<postExampleType>
    addPost: (postMessage: string) => void
}

export type postExampleType = {
    id: string
    message: string
    likes: number
}

const Profile: React.FC<ProfileType> = ({postsData, addPost}) => {

    return (
        <div className={ProfileModule["content"]}>
            <ProfileInfo/>
            <MyPosts postsData={postsData} addPost={addPost}/>
        </div>
    );
};

export default Profile;
