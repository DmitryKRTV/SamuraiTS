import React from "react";
import {UserType} from "../../redux/usersReducer/usersReducer";
import styles from "./users.module.css"
import {v1} from "uuid";
import axios from "axios";
import stockImage from "../../asset/stockImage.jpg"
import {finalType} from "./UsersContainer";

// type UsersType = {
//     users: UserType[],
//     follow: (usersId: string) => void
//     unfollow: (usersId: string) => void
//     setUsers: (usersId: UserType[]) => void
// }

export const UsersF = (props: finalType) => {
    const {users, follow, unfollow, setUsers} = props

    const getUsers = () => {
        if (users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
                response => {
                    setUsers(response.data.items)
                }
            )
        }
    }

    return (
        <div>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        <span>
                            <div>
                                <img src={((typeof user.photos.small) === "string")
                                    ? user.photos.small
                                    : stockImage}
                                     className={styles.userPhoto}
                                     alt={""}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                <div>{user.id}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

