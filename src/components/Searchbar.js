import React from 'react';
import { useState, useContext } from 'react';
import showsContext from '../context/shows/showsContext';


// Context
import ShowContext from '../context/shows/showsContext';


//Components
import Alert from "./Alert";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const showsContext  = useContext(ShowContext);

    const { searchShows } = showsContext;

    const onSearchHandler = (e) => {
        e.preventDefault();

        searchShows(searchTerm);
    };

    return (
        <div className="searchbar">
            <Alert message="Please enter something" type="danger"/>
            <form action="" className="searchbar__form">
                <input type="text" placeholder="Search For Tv Show"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-block" onClick={onSearchHandler}>
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default Searchbar
