import React, { useContext, useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../APIs/config";
import "./Movies.css";
import { LanguageContext } from "../context/language";

export default function Movies() {
  const [moviesList, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1); // Add page state variable
  const { lang, setLang } = useContext(LanguageContext);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchMovies();
  };

  const searchMovies = () => {
    if (query.trim())
      axiosInstance
        .get("/search/movie", {
          params: {
            query: query,
          },
        })
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err));
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query)
      axiosInstance
        .get("/movie/popular/", {
          params: {
            page: page,
            language: lang,
          },
        })
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err));
  }, [query, page, lang]);

  const navigate = useNavigate();
  const redirectToDetails = (id) => {
    navigate(`/movie-details/${id}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="input-group mb-3 px-3">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie"
          className="form-control me-3"
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>

      <div className="input-group my-3 px-3 justify-content-between align-items-center">
        <button onClick={goToPreviousPage} className="btn btn-primary">
          Previous Page
        </button>
        <span className="box-p fs-5 ">page {page}</span>
        <button onClick={goToNextPage} className="btn btn-primary">
          Next Page
        </button>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        {moviesList.map((movie) => {
          return (
            <div class="col" key={movie.id}>
              <MoviesCard movie={movie} redirectToDetails={redirectToDetails} />
            </div>
          );
        })}
      </div>
    </>
  );
}

// ignore submit
// useEffect(() => {
//   if (query) {
//     searchMovies();
//   } else {
//     axiosInstance
//       .get("/movie/popular/")
//       .then((res) => setMovies(res.data.results))
//       .catch((err) => console.log(err));
//   }
// });
