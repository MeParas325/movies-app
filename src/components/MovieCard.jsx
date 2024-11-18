import { IMG_PATH } from "../utilities/constants"

const MovieCard = (props) => {
    const {movie, rating, imdb_url} = props.data
    return (
        <div className="movieCard">
            <div className="mov-image">
                <img src={IMG_PATH} alt='movie-img' />
            </div>
            <h4>{movie}</h4>
            <div className="imdb-box">
                <span>{rating}</span>
                <span><a href={imdb_url} target="_blank">Visit IMDB</a></span>
            </div>
        </div>
    )
}

export default MovieCard