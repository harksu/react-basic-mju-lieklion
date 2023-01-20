import React from "react";
import styled from "styled-components";
const MoviePoster = ({ imgSrc }) => {
  return (
    <MoviePosterImage>
      <img alt="rankedMovie" src={imgSrc} />
    </MoviePosterImage>
  );
};

const MoviePosterImage = styled.div`
  margin: 0px 10px 0 10px;
  & > :hover {
    cursor: pointer;
  }
`;

export default MoviePoster;
