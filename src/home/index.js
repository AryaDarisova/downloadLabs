import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../global/navigation';
import Main from "./main";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <Main />
        </div>
    );
}

export default Home;