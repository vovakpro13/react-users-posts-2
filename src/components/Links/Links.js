import React from 'react';
import {Link} from "react-router-dom";
import s from './links.module.css';

const Links = () => {
    return (
        <div className={s.links}>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
        </div>
    );
};

export default Links;