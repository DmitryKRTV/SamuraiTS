import React from "react";
import profileInfoModule from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={profileInfoModule["image"]}>Image</div>
            <div className={profileInfoModule["description"]}>Ava + description</div>
        </div>
    );
};

export default ProfileInfo;
