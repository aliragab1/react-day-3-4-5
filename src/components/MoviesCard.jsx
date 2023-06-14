import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../store/slices/counter";

export default function MoviesCard({ movie, redirectToDetails }) {
  // console.log(movie);
  const favorites = useSelector((state) => state.counter.favorites);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const dispatch = useDispatch();

  return (
    <div className="card h-100 mx-3 ">
      <div className="box">{movie.vote_average} ⭐</div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p>{movie.overview}</p>
      </div>
      <button
        className="btn btn-secondary mb-3"
        onClick={() => redirectToDetails(movie.id)}
      >
        More Details
      </button>
      <button
        className="btn btn-dark"
        onClick={() => dispatch(addMovie(movie))}
      >
        {isFavorite ? (
          <span>
            <i className="fa-solid fa-star fa-2xl text-warning"></i> Remove
          </span>
        ) : (
          <span>
            <i className="fa-regular fa-star fa-2xl"></i> Add
          </span>
        )}
      </button>
    </div>
  );
}
