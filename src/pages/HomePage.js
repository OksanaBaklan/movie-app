/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie/MovieList";
const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <section className="movies-layout page-container pb-10">
        <NavLink to="/discover">
          <h2 className="section-title text-black">Discover</h2>
        </NavLink>
        <MovieList></MovieList>
      </section>
      {/* <section className="movies-layout page-container pb-20">
        <NavLink to="/top_rated">
          <h2 className="section-title">Top Rated</h2>
        </NavLink>
        <MovieList type="top_rated"></MovieList>
      </section> */}
      <section className="movies-layout page-container">
        <NavLink to="/discover">
          <h2 className="section-title text-black">Trending</h2>
        </NavLink>
        <MovieList type="trending"></MovieList>
      </section>
    </>
  );
};

export default HomePage;
