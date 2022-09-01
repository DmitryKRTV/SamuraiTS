import React from "react";
import stockImage from "../../asset/stockImage.jpg";
import styles from "./users.module.css";
import axios from "axios";
import {finalType} from "./UsersContainer";

type PropsType = finalType

type StateType = {}

export class Users extends React.Component<PropsType, StateType> {


    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
                response => {
                    this.props.setUsers(response.data.items)
                }
            )
        }
    }


    render() {
        return <div>
            {this.props.users.map((user, index) => {
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
                                    ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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

    }
}

