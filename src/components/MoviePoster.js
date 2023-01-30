import React from "react";
import styled from "styled-components";
const MoviePoster = ({ imgSrc, grade, index }) => {
  return (
    <MoviePosterImage>
      {grade ? (
        <>
          <Test alt="rankedMovie" src={grade[index]} />
          <Test alt="rankedMovie" src={imgSrc} />
        </>
      ) : (
        <Test alt="rankedMovie" src={imgSrc} />
      )}
    </MoviePosterImage>
  );
};

const MoviePosterImage = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0px 10px 0 10px;
  & > :hover {
    cursor: pointer;
  }
`;

const MovieImage = styled.div``;

const Test = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

export default MoviePoster;
