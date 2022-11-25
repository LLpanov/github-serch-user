import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-red-300 text-black ">
         <h4 className="font-bold">Github Search</h4>

        <span>
            <Link to="/" className="mr-2">Home</Link>
            <Link to="/favorites" className="black">Favorites</Link>
        </span>
    </nav>

    );
};

export {Navigation};