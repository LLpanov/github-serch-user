import React from 'react';

import {useAppSelector} from "../hooks";

const FavoritesPage = () => {
    const {favourites} = useAppSelector(state => state.github);

    if (favourites.length === 0) {
        return <p className={"text-2xl top-1/4 text-center"}> No items... </p>
    }

    return (
        <div className={"flex-wrap flex-shrink-0 "}>


                {favourites.map(f => (
                    <div className="flex-wrap flex justify-between left-1 pt-2.5 w-3/6 " key={f}>

                        <p className={"rounded-lg flex-wrap font-bold hover:bg-red-600 bg-sky-400 ml-1.5  mg-1.5 cursor-pointer  bg-sky-400p "}>
                            <a href={f}
                              target="_blank"> <span className={"mr-1.5 ml-1.5"}> ✪ </span> {f}
                            <span className={"ml-1.5 mr-1.5"}> ✪ </span> </a>
                        </p>

                    </div>
                ))}

        </div>

    );
};

export {FavoritesPage};