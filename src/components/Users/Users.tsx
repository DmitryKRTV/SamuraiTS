import React from "react";
import {UserType} from "../../redux/usersReducer/usersReducer";
import styles from "./users.module.css"

type UsersType = {
    users: UserType[],
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    setUsers: (usersId: UserType[]) => void
}

export const Users = (props: UsersType) => {
    const {users, follow, unfollow} = props

    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photoUrl} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

