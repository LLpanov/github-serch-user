import React from 'react';

import {IRepo} from "../interfaces";
import {useActions} from "../hooks/actions";


const RepoCard = ({repo}: { repo: IRepo }) => {
    const {addFavourite} = useActions()

    const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        addFavourite(repo.html_url)
    }

    return (
        <div className={"border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-yellow-300 transition-all"}>
            <a href={repo.html_url} target="_blank"><h2 className={"text-lg font-bold"}>{repo.full_name}</h2>
                <p className={"text-sm"}>
                    Forks:<span className={"font-bold mr-2"}>{repo.forks}</span>
                    Watchers:<span className={"font-bold"}>{repo.watchers}</span>
                </p>
                <p className={"text-sm font-thin "}>{repo?.description}
                </p>
                <button className={"py-2 px-4 bg-sky-500 rounded hover:shadow-md transition-all"}
                        onClick={addToFavorite}
                >Add
                </button>
            </a>
        </div>
    );
};

export {RepoCard};