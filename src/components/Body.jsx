import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Shimmer from './Shimmer'

const Body = () => {

    const [movData, setMovData] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        fetch('https://dummyapi.online/api/movies')
            .then((response) => response.json())
            .then((json) => setMovData(json)); 
    }

    return movData === null ? <Shimmer /> : (
        <>
            <div className="moviesCard">
                {
                    movData.map((movie) => (

                        <MovieCard key={movie.id} data={movie}/>

                    ))
                }
            </div>
        </>
    )
}

export default Body