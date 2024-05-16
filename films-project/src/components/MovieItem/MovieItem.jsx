import React from 'react';
import { useState,useEffect} from 'react'
import './MovieItem.css';
import { useDispatch,useSelector } from 'react-redux';
import { addToList,deleteFromList } from "../../store/reducer";
function MovieItem(props) {
    let dispatch=useDispatch()
    let [buttonText,setButtonText]=useState('Добавить в список ➕');
    let [notClicked,setNotClicked]=useState(false);
    let favorites=useSelector((state)=>state.movies.favorites);
    let notClickedFavorites=useSelector(state=>state.movies.notClickedFavorites);
    useEffect(()=>{
        if((favorites.findIndex(item=>item.imdbID===props.imdbID))>=0)
        {
            setNotClicked(false);
            setButtonText('Добавлено✔️'); 
        }
        else{
            setNotClicked(true);
            setButtonText('Добавить в список ➕')
        }
    },[favorites]); 
    function handleClick(){
        if(notClicked){
                setButtonText('Добавлено✔️');            
                dispatch(addToList({
                    Title:props.Title,
                    Year:props.Year,
                    imdbID:props.imdbID,
                    Type:props.Type,
                    Poster:props.Poster,
                }));      
        }else{
                    dispatch(deleteFromList({
                        imdbID:props.imdbID
                    }))
                    setButtonText('Добавить в список ➕')
                    
                }
                   
        setNotClicked(!notClicked);
    }   

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={props.Poster} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{props.Title}&nbsp;({props.Year})</h3>
                <button  disabled={!notClickedFavorites} onClick={handleClick}  type="button" className="movie-item__add-button">{buttonText}</button>
            </div>
        </article>
    );
}
 
export default MovieItem;