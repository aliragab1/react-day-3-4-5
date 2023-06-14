// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axiosInstance from "../APIs/config";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  const loction = useLocation();
  // const [serachParam, setSearch] = useSearchParams();
  // console.log(params);
  console.log(loction);
  // console.log(serachParam.get("name"));

  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1>Movie Details</h1>

      <div class="card" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
          class="card-img-top"
          alt="Movie Poster"
        />
        <div class="card-body">
          <h5 class="card-title">{movieDetails.original_title}</h5>
          <p class="card-text">{movieDetails.overview}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{movieDetails.release_date}</li>
        </ul>
      </div>
    </>
  );
}
