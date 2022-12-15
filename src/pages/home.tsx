import React, {useEffect, useState} from 'react';

import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../store/github";
import {useDebounce} from "../hooks";
import {RepoCard} from "../components";


const Home = () => {

    const [search, setSearch] = useState('');
    const debounce = useDebounce(search)
   const  [ dropdown , setDropdown ]= useState(false)
    const {isLoading, isError, data} = useSearchUsersQuery(debounce,{
        skip: debounce.length < 3,
        refetchOnFocus: true,
    });

    const [fetchRepos,{ isLoading:areReposLoading,data:repos}] = useLazyGetUserReposQuery()

    useEffect(() => {
        setDropdown(debounce.length > 3 && data?.length! > 0)
    }, [debounce])

    const clickHendler = (username:string) =>{
        fetchRepos(username);
        setDropdown(false);
    }


    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p className="text-center text-red-600">Error wrong...</p>}

            <div className="relative w-[560px]">
                <input type="text"
                       className="border py-2 px-4 w-full h-[42px] mb-2"
                       placeholder="Search for GitHub..."
                       value={search}
                       onChange={event => setSearch(event.target.value)}
                />
                {dropdown && <ul className="list-none absolute to-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                    {isLoading && <p className="text-center">Loading...</p>}
                    {data?.map(user => (
                        <li key={user.id}
                            onClick={() => clickHendler(user.login)}
                        className={"py-2 px-4 hover:bg-sky-500 hover:text-black transition-colors cursor-pointer"}
                        >{user.login}</li>
                    ))}
                </ul>}
                <div className="container">
                    {areReposLoading && <p className={"text-center"}>Loading...</p>}
                    {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}

                </div>
            </div>

        </div>
    );
};

export {Home} ;