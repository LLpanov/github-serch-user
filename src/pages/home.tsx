import React from 'react';
import {useSearchUsersQuery} from "../store/github/github.api";


const Home = () => {
    const { isLoading, isError, data } = useSearchUsersQuery('panov')
    console.log(data);
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p className="text-center text-red-600">Error wrong...</p>  }

            <div className="relative w-[560px]">
                    <input type="text"
                    className="border py-2 px-4 w-full h-[42px] mb-2"
                    placeholder="Search for GitHub..."
                    />
                <div className="absolute to-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tempora.
                </div>
            </div>

        </div>
    );
};

export {Home} ;