import React, {useEffect, useReducer} from 'react';
import {usersAPI} from "../../services/api";
import User from "./User/User";
import {Route} from "react-router-dom";
import UserPosts from "./UserPosts/UserPosts";
import s from './users.module.css';

const SET_USERS = 'SET_USERS';
const SET_USER_POSTS = 'SET_USER_POSTS';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        case SET_USER_POSTS:
            return {...state, userPosts: action.userPosts}
        default:
            return state;
    }
}

const Users = ({url}) => {
    const [state, dispatch] = useReducer(reducer, {users: [], userPosts: []})

    useEffect(() => usersAPI.requestUsers()
        .then(users => dispatch({type: SET_USERS, users})), []);

    return (
        <div className={s.wrapper}>
            <div>
                {state.users.map(u => <User key={u.id} url={url} {...u} />)}
            </div>
            <Route path={`${url}/:userId/posts`}
                   render={({match: {params: {userId}}}) => <UserPosts userId={userId} />}/>
        </div>
    );
}

export default Users;