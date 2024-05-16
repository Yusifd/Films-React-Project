
import MovieItem from "../MovieItem/MovieItem";
import './Movies.css';
import {useSelector} from 'react-redux'

function Movies() {
    let movies = useSelector((state) => state.movies.movies);

    return ( 
        <ul className="movies">
            {Array.isArray(movies) && movies.map((movie) => {
                return(
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
                )
            })}
        </ul>
    );
}
 
export default Movies;