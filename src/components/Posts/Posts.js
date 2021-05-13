import React, {useEffect, useState} from 'react';
import {postsAPI} from "../../services/api";
import Post from "./Post/Post";
import s from './posts.module.css';
import {Route} from "react-router-dom";
import Comments from "../Comments/Comments";

const Posts = ({url}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => postsAPI.requestPosts().then(posts => setPosts(posts)), []);

    return (
        <div className={s.posts}>
            <div>
                {
                    posts && posts.map(p => <Post key={p.id} {...p} url={url}/>)
                }
            </div>
            <div>
                <Route path={`${url}/:postId/comments`} render={({match: {params:{postId}}}) => <Comments postId={postId}/>}/>
            </div>
        </div>
    );
};

export default Posts;