import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9yHP6FTCdaw4ORqYdg8Qnik2bUF0DwJY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{

    state = { 
        reviews: []
    }

    getReviews = () => { 
         fetch(URL)
        .then(resp => resp.json())
        .then(reviews => this.setState({reviews: reviews.results}))
    }


    componentDidMount() { 
        this.getReviews(); 
    }



    render() {

    const {reviews} = this.state; 

    return (
    
        <div className= "latest-movie-reviews">
           {reviews ? <MovieReviews reviews ={reviews} /> : "Loading Reviews"}
        </div>
    )

    }
}