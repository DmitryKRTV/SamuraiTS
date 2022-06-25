import React from "react";
import ProfileModule from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={ProfileModule["content"]}>
            <div>Image</div>
            <div>Ava + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
