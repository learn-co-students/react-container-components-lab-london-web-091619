import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9yHP6FTCdaw4ORqYdg8Qnik2bUF0DwJY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component { 
    state = { 
        reviews: [], 
        searchTerm: ""
    }


fetchSearchedReviews = () => { 
    fetch(URL+`&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(reviews => this.setState({reviews: reviews.result}));
};
    render () { 

        return ( 
            <div> 
             <form onSubmit ={e => {
                 e.preventDefault(); 
                 this.fetchSearchedReviews(); 
             }}
            >
            <input 
             value = {searchTerm}
             onChange ={e => {
                 this.setState({searchTerm : e.target.value});

             }} 
             ></input>
             </form>

             <div className= "latest- movie- reviews">
                 {reviews ? <MovieReviews reviews={reviews} /> : "Loading Reviews"}
             </div>
            
            </div>

        )


}
}



