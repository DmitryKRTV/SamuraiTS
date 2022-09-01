import state from "../oldState/state";
import {v1} from "uuid";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type UserType = {
    id: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
}

export type UsersType = {
    users: UserType[]
}

type FollowAType = ReturnType<typeof followAC>
type UnfollowAType = ReturnType<typeof unfollowAC>
type SetUsersAType = ReturnType<typeof setUsersAC>

type finalType = SetUsersAType | FollowAType | UnfollowAType

const initialState: UsersType = {
    users: [] as UserType[]
}

export const usersReducer = (state: UsersType = initialState,
                             action: finalType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(i => i.id === action.userId ? {...i, followed: true} : i)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(i => i.id === action.userId ? {...i, followed: false} : i)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId: string) => ({type: FOLLOW, userId}) as const;
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const;
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const;


