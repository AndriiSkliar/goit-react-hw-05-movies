import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader";
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Movies = lazy(() => import("pages/Movies/Movies"));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
