import React, {useEffect, useState} from 'react';
import {usersAPI} from "../../../services/api";
import Post from "../../Posts/Post/Post";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => usersAPI.requestUserPosts(userId).then(p => setPosts(p)) , [userId]);

    return (
        <div>
            <h4>Author - #{userId}</h4>
            {
                posts && posts.map(p => <Post  {...p}/>)
            }
        </div>
    );
};

export default UserPosts;