import React, {useEffect, useState} from 'react';
import {postsAPI} from "../../services/api";
import Comment from "./Comment/Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState(null);
    useEffect( () => postsAPI.requestPostComments(postId).then(c => setComments(c)), [postId]);
    return (
        <div>
            <h3>Comments for #{postId} post</h3>
            {
                comments && comments.map(c => <Comment key={c.id} {...c}/>)
            }
        </div>
    );
};

export default Comments;