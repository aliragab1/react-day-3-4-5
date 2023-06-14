import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Favourits from "../pages/Favourits";
// import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";
import Layout from "../components/layout/Layout";
// import Movies from "../pages/Movies";
// import Register from "../pages/Register";

const Movies = React.lazy(() => import("../pages/Movies"));
const Favourits = React.lazy(() => import("../pages/Favourits"));
const MovieDetails = React.lazy(() => import("../pages/MovieDetails"));
const Register = React.lazy(() => import("../pages/Register"));
export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/favourites"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Favourits />
            </Suspense>
          }
        />
        <Route
          path="/movie-details/:id?"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Register />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
