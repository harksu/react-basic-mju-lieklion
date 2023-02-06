import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MovieList from "./../components/MovieList";
import { MOVIE_RANKED } from "./../datas/movieImageSrc";

const MainPage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated?";
  const NOW_PLAY_URL = "https://api.themoviedb.org/3/movie/now_playing?";
  const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?";
  const [movieList, setMovieList] = useState([]);
  const [nowPlayMovie, setNowPlayMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(`${BASE_URL}api_key=${API_KEY}`),
        axios.get(`${NOW_PLAY_URL}api_key=${API_KEY}`),
        axios.get(`${POPULAR_URL}api_key=${API_KEY}`),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setMovieList(res1.data.results.slice(0, 10));
          setNowPlayMovie(res2.data.results.slice(0, 10));
          setPopularMovie(res3.data.results.slice(0, 10));
        })
      )

      .catch((err) => console.log(err));
  }, []);
  return (
    <MainPageContainer>
      <Header />
      <MovieList
        title="오늘 대한민국의 TOP 10영화"
        movieSrcArray={movieList}
        grade={MOVIE_RANKED}
      />
      <MovieList title="해외 시리즈" movieSrcArray={nowPlayMovie} />
      <MovieList title="시리즈" movieSrcArray={popularMovie} />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default MainPage;
