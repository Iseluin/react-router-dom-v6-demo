import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Movies() {
    return (
        <>
            <div>
                You like some movies dont ya?
            </div>

            <nav>
                <Link to="new-movies">New Movies</Link>
                <Link to="best-movies">Best Movies</Link>
            </nav>

            <Outlet/>
        </>
    );
}

export default Movies;