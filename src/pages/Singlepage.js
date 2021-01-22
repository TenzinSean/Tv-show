// import React from 'react'
import {useEffect, useContext } from 'react';
import ShowsContext from '../context/shows/showsContext';

//Context 


const SinglePage = ({match}) => {

    const {getSingleShow, singleShow, loading } = useContext(ShowsContext);

    useEffect(() => {
        getSingleShow(match.params.id);
        // eslint-disable-next-line

    }, [])

    return (
        <>
            {loading ? <h2>Loading....</h2>:
                <div className="singleshow">
                    <img src={singleShow.iamge ? singleShow.image.medium :  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" } 
                        alt={singleShow.name}/>
                    <div className="singleshow__info">
                        <h1>{singleShow.name}</h1>
                        {singleShow.generes && singleShow.generes.map(genre => (
                            <span key={genre} className="singleshow__genre">{genre}</span>
                        ))}
                        <p>
                            <strong> Status: </strong>
                                {singleShow.status && singleShow.status}
                        </p>
                        <p>
                            <strong> Rating: </strong>
                                {singleShow.rating && singleShow.rating}
                        </p>
                    </div>
                </div>
            }
        </>
    )
};

export default SinglePage;
