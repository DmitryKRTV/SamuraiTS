import React from "react";
import {connect} from "react-redux";
import {UsersF} from "./UsersF";
import {AppStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer/usersReducer";
import {Users} from "./UsersС";

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type finalType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        follow: (usersId: string) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId: string) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (usersId: UserType[]) => {
            dispatch(setUsersAC(usersId))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
