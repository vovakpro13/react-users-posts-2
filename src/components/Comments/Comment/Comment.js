import React from 'react';
import s from '../comments.module.css';

const Comment = ({id, email, body}) => {
    return (
        <div className={s.comment}>
            #{id} - <strong>{email}</strong> - {body}
        </div>
    );
};

export default Comment;