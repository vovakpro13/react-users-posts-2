import React from 'react';
import {Route} from 'react-router-dom';
import Users from "../Users/Users";
import Posts from "../Posts/Posts";

const Routers = () => {
    return (
        <div>
            <Route path={'/users'} render={({match: {url}}) => <Users url={url}/>}/>
            <Route path={'/posts'} render={({match: {url}}) => <Posts url={url}/>}/>
        </div>
    );
};

export default Routers;