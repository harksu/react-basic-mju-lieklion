import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";

const MovieList = ({ title, movieSrcArray, grade }) => {
  return (
    <>
      <MovieListTitle>{title}</MovieListTitle>
      <MovieListContainer>
        {movieSrcArray?.map((item, index) => (
          <MoviePoster imgItem={item} key={index} grade={grade} index={index} />
        ))}
      </MovieListContainer>
    </>
  );
};

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const MovieListTitle = styled.h3`
  margin-left: 20px;
`;

export default MovieList;
