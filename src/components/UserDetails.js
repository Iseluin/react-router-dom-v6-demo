import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
    const {id} = useParams();
    return (
        <div>
            User {id}'s detailed data
        </div>
    );
}

// useSearchParams();

export default UserDetails;