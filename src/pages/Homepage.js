import React from 'react'

import { useContext } from 'react';


// Context
import ShowsContext from '../context/shows/showsContext';

// components
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItems";

const Homepage = () => {
    const showsContext = useContext(ShowsContext);
    const { loading, shows } = showsContext;
    return ( 
        <div className="Homepage">
            <Searchbar />
            {loading ? (
                <h2>Loading...</h2>
                ) : (
                <div className="homepage__list">
                    {shows.map((item) => (
                        <ListItem 
                            key={item.show.id}
                            id={item.show.id}
                            image={item.show.image ? item.show.image.medium : 
                            "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                            name={item.show.name}
                            rating={item.show.rating.average ? 
                                item.show.rating.average : "No rating"
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Homepage
