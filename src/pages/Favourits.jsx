import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../store/slices/counter";

export default function Favourits() {
  const moviesList = useSelector((state) => state.counter.favorites);
  const dispatch = useDispatch();
  console.log(moviesList);

  return (
    <div className="container">
      <h1>Favourites</h1>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        {moviesList.map((movie) => {
          return (
            <div class="col" key={movie.id}>
              <div className="card h-100 mx-3 ">
                <div className="box">{movie.vote_average} ⭐</div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.original_title}</h5>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(removeMovie(movie));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
