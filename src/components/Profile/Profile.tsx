import React from "react";
import ProfileModule from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={ProfileModule["content"]}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
