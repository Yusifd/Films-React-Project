import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './ListPage.css';

function ListPage() {
    let [savedMovies, setSavedMovies] = useState(null);


    let { id } = useParams();
    useEffect(() => {
        if (savedMovies) {
            console.log(savedMovies.movies);
        }
    }, [savedMovies]);
    useEffect(() => {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(res => res.json())
            .then(data => setSavedMovies(data))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>       
            <ul>
            {savedMovies && savedMovies.movies && savedMovies.movies.map((movie) => (
                <center>
                        <a className="list-page__link" href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" key={movie.imdbID}>
                            <li className="list-page__item">
                                <img src={movie.Poster !== "N/A" ? movie.Poster : "default-movie.png"} className="list-page__item-poster" alt="movie-poster" />
                                <h2 className="list-page__item-title">{movie.Title}</h2>
                                <button className="list-page__item-watch-button">Смотреть на IMDB</button>
                            </li>
                        </a>
                        </center>
                    ))}
            </ul>
        </div>
    );
}

export default ListPage;