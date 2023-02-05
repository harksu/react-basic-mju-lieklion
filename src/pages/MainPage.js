import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MovieList from "./../components/MovieList";
import { MOVIE_RANKED, RANKED_MOVIES_SRC } from "./../datas/movieImageSrc";

const MainPage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3/movie/now_playing?"; //이것두 나중에 env로 빼기

  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get(`${BASE_URL}api_key=${API_KEY}`)
      .then((res) => {
        setMovieList(res.data.results.slice(0, 10));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovieList();
  });

  return (
    <MainPageContainer>
      <Header />
      <MovieList
        title="오늘 대한민국의 TOP 10영화"
        movieSrcArray={movieList}
        grade={MOVIE_RANKED}
      />
      <MovieList title="해외 시리즈" movieSrcArray={RANKED_MOVIES_SRC} />
      <MovieList title="시리즈" movieSrcArray={RANKED_MOVIES_SRC} />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Modal = styled.div`
  width: 80%;
  height: 60%;
  background-color: pink;
`;

export default MainPage;
