import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-red-300 text-black ">
         <h4 className="font-bold hover:text-yellow-300">Github Search</h4>

        <span>
            <Link to="/" className="mr-2 hover:text-amber-100 cursor-pointer"  >Home</Link>
            <Link to="/favorites" className="black hover:text-amber-100  cursor-pointer ">Favorites</Link>
        </span>
    </nav>

    );
};

export {Navigation};