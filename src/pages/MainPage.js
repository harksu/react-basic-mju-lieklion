import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MovieList from "./../components/MovieList";
import {
  RANKED_MOVIES_SRC,
  FOREGIN_MOVIES_SRC,
  SERIES_MOVIES_SRC,
  MOVIE_RANKED,
} from "./../datas/movieImageSrc";

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <MovieList
        title="오늘 대한민국의 TOP 10영화"
        movieSrcArray={RANKED_MOVIES_SRC}
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

export default MainPage;
