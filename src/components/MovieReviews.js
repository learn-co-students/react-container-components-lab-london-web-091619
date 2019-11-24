// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <h1 className="review" key={Math.random()}>
          {review.summary_short}
        </h1>
      ))}
    </div>
  );
};

export default MovieReviews;
