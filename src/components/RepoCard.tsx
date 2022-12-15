import React, {useState} from 'react';

import {IRepo} from "../interfaces";
import {useActions} from "../hooks";
import {useAppSelector} from "../hooks";


const RepoCard = ({repo}: { repo: IRepo }) => {
    const {addFavourite, removeFavourite} = useActions();
    const {favourites} = useAppSelector(state => state.github);

    const [isFav , setIsFav ] = useState(favourites.includes(repo.html_url));

    const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        addFavourite(repo.html_url)
        setIsFav(true)
    }
    const removeToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        removeFavourite(repo.html_url)
        setIsFav(false)
    }

    return (
        <div className={"border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-yellow-300 transition-all"}>
            <a href={repo.html_url} target="_blank"><h2 className={"text-lg font-bold"}>{repo.full_name}</h2>
                <p className={"text-sm"}>
                    Forks:<span className={"font-bold mr-2"}>{repo.forks}</span>
                    Watchers:<span className={"font-bold"}>{repo.watchers}</span>
                </p>
                <p className={"text-sm font-thin  justify-between"}>{repo?.description}
                </p>
                { !isFav && <button className={"py-2 px-4 w-1/4 bg-sky-500 rounded mr-2 hover:shadow-md transition-all"}
                        onClick={addToFavorite}
                >Add
                </button>}

                {isFav && <button className={"py-2 px-4 w-1/4 bg-red-600 rounded hover:shadow-md transition-all"}
                        onClick={removeToFavorite}
                > Delete
                </button>}
            </a>
        </div>
    );
};

export {RepoCard};