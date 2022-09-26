import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    return (
        <div>
            <h3>HomePage</h3>
            <button onClick={()=> navigate("delivery-info")}>Done with your order?</button>
        </div>
    );
}

export default Home;