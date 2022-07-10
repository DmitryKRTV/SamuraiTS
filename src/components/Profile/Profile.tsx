import React from "react";
import ProfileModule from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type postsDataType = {
    postsData: Array<postExampleType>
}

export type postExampleType = {
    id: string
    message: string
    likes: number
}

const Profile: React.FC<postsDataType> = ({postsData}) => {

    return (
        <div className={ProfileModule["content"]}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
};

export default Profile;
