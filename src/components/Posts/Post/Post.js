import React from 'react';
import {Link} from "react-router-dom";
import s from '../posts.module.css';

const Post = ({userId, id, title, url}) => {
    return (
        <div className={s.post}>
            <p><strong>{id}</strong> - <em>{title}</em></p>
            {
                url && <Link to={{pathname: `${url}/${id}/comments`}}>
                    <button>Comments</button>
                </Link>
            }
        </div>
    );
};

export default Post;