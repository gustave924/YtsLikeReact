import * as actionTypes from "./ActionTypes";
const defaultState = {
    popularMovies:[],
    latestMovies:[],
    selectedMovie: {
        "id": 10,
        "url": "https://yts.lt/movie/13-2010",
        "imdb_code": "tt0798817",
        "title": "13",
        "title_english": "13",
        "title_long": "13 (2010)",
        "slug": "13-2010",
        "year": 2010,
        "rating": 6.1,
        "runtime": 91,
        "genres": [
        "Action",
        "Drama",
        "Thriller"
        ],
        "download_count": 234998,
        "like_count": 252,
        "description_intro": "In Talbot, Ohio, a father's need for surgeries puts the family in a financial bind. His son Vince, an electrician, overhears a man talking about making a fortune in just a day. When the man overdoses on drugs, Vince finds instructions and a cell phone that the man has received and substitutes himself: taking a train to New York and awaiting contact. He has no idea what it's about. He ends up at a remote house where wealthy men bet on who will survive a complicated game of Russian roulette: he's number 13. In flashbacks we meet other contestants, including a man whose brother takes him out of a mental institution in order to compete. Can Vince be the last one standing?",
        "description_full": "In Talbot, Ohio, a father's need for surgeries puts the family in a financial bind. His son Vince, an electrician, overhears a man talking about making a fortune in just a day. When the man overdoses on drugs, Vince finds instructions and a cell phone that the man has received and substitutes himself: taking a train to New York and awaiting contact. He has no idea what it's about. He ends up at a remote house where wealthy men bet on who will survive a complicated game of Russian roulette: he's number 13. In flashbacks we meet other contestants, including a man whose brother takes him out of a mental institution in order to compete. Can Vince be the last one standing?",
        "yt_trailer_code": "Y41fFj-P4jI",
        "language": "English",
        "mpa_rating": "R",
        "background_image": "https://yts.lt/assets/images/movies/13_2010/background.jpg",
        "background_image_original": "https://yts.lt/assets/images/movies/13_2010/background.jpg",
        "small_cover_image": "https://yts.lt/assets/images/movies/13_2010/small-cover.jpg",
        "medium_cover_image": "https://yts.lt/assets/images/movies/13_2010/medium-cover.jpg",
        "large_cover_image": "https://yts.lt/assets/images/movies/13_2010/large-cover.jpg",
        "torrents": [
        {
        "url": "https://yts.lt/torrent/download/BE046ED20B048C4FB86E15838DD69DADB27C5E8A",
        "hash": "BE046ED20B048C4FB86E15838DD69DADB27C5E8A",
        "quality": "720p",
        "type": "bluray",
        "seeds": 26,
        "peers": 3,
        "size": "946.49 MB",
        "size_bytes": 992466698,
        "date_uploaded": "2015-10-31 20:46:37",
        "date_uploaded_unix": 1446320797
        }
        ],
        "date_uploaded": "2015-10-31 20:46:37",
        "date_uploaded_unix": 1446320797
        },
    similarMovies:[]
        
}

export const Movies = (state = defaultState, action) => {
    switch(action.type){
        
        case actionTypes.ADD_POPULAR_MOVIES:
            return({
                ...state,
                popularMovies: action.payload
            });
        
        case actionTypes.ADD_LATES_MOVIES:
            return({
                ...state,
                latestMovies: action.payload
            });
        
        case actionTypes.SET_SELECTED_MOVIE:
            return({
                ...state,
                selectedMovie: action.payload
            });
        
        case actionTypes.ADD_SIMILAR_MOVIES:
            return({
                ...state,
                similarMovies: action.payload
            })

        default:
            return state;
    }
}