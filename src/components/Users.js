import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Users(props) {
    return (
        <div>
            <Link to={"1"}>User1</Link>
            <Link to={"2"}>User2</Link>
            <Link to={"3"}>User3</Link>
            <Outlet/>
        </div>
    );
}

export default Users;