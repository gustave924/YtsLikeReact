import {BASE_URL} from "../Shared/baseUrl";
import * as actionTypes from "./ActionTypes" ;
import fetch from "cross-fetch";


export const getPopularMovies = () => (dispatch) => {
    
    return fetch(BASE_URL+"list_movies.json?minimum_rating=9&limit=4")
            .then(response => {
                if(response.ok){
                    return response;
                }else{                
                    var error = new Error(`Error: ${response.status} : ${response.statusText}`);
                }
            }, error => {
                var errMsg  = new Error(error.message);
                return errMsg; 
            })
            .then(response => response.json())
            .then(reponse => dispatch(addMovies(reponse.data.movies)))
            .catch(error => console.log(error));
}


export const getLatestMovies = () => (dispatch) =>{
    return fetch(BASE_URL+"list_movies.json?quality=720p&limit=8")
            .then(response => {
                if(response.ok){
                    return response;
                }else{                
                    var error = new Error(`Error: ${response.status} : ${response.statusText}`);
                }
            }, error => {
                var errMsg  = new Error(error.message);
                return errMsg; 
            })
            .then(response => response.json())
            .then(reponse => dispatch(addLatestMovies(reponse.data.movies)))
            .catch(error => console.log(error));
}

export const getSelectedMovie = (id, history) => (dispatch) => {
    return fetch(`${BASE_URL}movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
            .then(response => {
                if(response.ok){
                    return response;
                }else{                
                    var error = new Error(`Error: ${response.status} : ${response.statusText}`);
                }
            }, error => {
                var errMsg  = new Error(error.message);
                return errMsg; 
            })
            .then(response => response.json())
            .then(response => {
                const name = response.data.movie.title_english.split(" ").join("-");
                history.push(`/movie/${name}`);
                return dispatch(addSelectedMovie(response.data.movie))}
            )
            .catch(error => console.log(error));
}

export const getSimilarMovies = (id) => (dispatch) => {
    return fetch(`${BASE_URL}movie_suggestions.json?movie_id=${id}`)
            .then(response => {
                if(response.ok){
                    return response;
                }else{                
                    var error = new Error(`Error: ${response.status} : ${response.statusText}`);
                }
            }, error => {
                var errMsg  = new Error(error.message);
                return errMsg; 
            })
            .then(response => response.json())
            .then(response => dispatch(addSuggestedMovies(response.data.movies)))
            .catch(error => console.log(error));
}


export const addMovies = (movies) => {
    const action = {
        type: actionTypes.ADD_POPULAR_MOVIES,
        payload: movies,
    }
    return action;
}

export const addLatestMovies = (movies) => {
    const action = {
        type: actionTypes.ADD_LATES_MOVIES,
        payload: movies,
    }
    return action;
}

export const addSelectedMovie = (selectedMovieData) =>{
    const action = {
        type: actionTypes.SET_SELECTED_MOVIE,
        payload: selectedMovieData
    }
    return action;
}

export const addSuggestedMovies = ( suggestedMovies ) => {
    const action = {
        type: actionTypes.ADD_SIMILAR_MOVIES,
        payload: suggestedMovies
    }
    return action;
}