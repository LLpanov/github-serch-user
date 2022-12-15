import React from 'react';
import {Route, Routes} from "react-router-dom";

import {FavoritesPage, Home} from "./pages";
import {Navigation} from "./components";

const App = () => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/favorites"} element={< FavoritesPage/>}/>
            </Routes>
        </>
    );
};

export default App
