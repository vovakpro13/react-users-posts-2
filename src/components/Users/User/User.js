import React from 'react';
import {Link} from "react-router-dom";

const User = props => {
    const {id, name, email, url} = props;

    return (
        <div>
            <h3>{name}</h3>
            <em>{email}</em>
            <Link to={`${url}/${id}/posts`}>
                <button>Posts</button>
            </Link>

        </div>
    );
};

export default User;