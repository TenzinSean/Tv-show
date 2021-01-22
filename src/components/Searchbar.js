import React from 'react';
import { useState, useContext } from 'react';
import showsContext from '../context/shows/showsContext';


// Context
import ShowContext from '../context/shows/showsContext';
import alertContext from '../context/alerts/alertsContext';

//Components
import Alert from "./Alert";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const showsContext  = useContext(ShowContext);

    const { searchShows } = showsContext;

    const { alert, setAlert } = useContext(alertContext)

    const onSearchHandler = (e) => {
        e.preventDefault();


        if(searchTerm === "") {
            setAlert("Please enter something", "danger");
        } else {
            searchShows(searchTerm);
        }
    };

    return (
        <div className="searchbar">
            {alert ? <Alert message={alert.message} type={alert.type}/> : null}
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
