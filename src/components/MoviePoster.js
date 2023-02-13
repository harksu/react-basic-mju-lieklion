import React, { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

const MoviePoster = ({ imgItem, grade, index }) => {
  const imgSrc = imgItem.poster_path;
  const movieOverview = imgItem.overview;
  const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w500`; //이것도 나중에 env로 빼기

  const IMG = `${IMAGE_BASE_URL}${imgSrc}`;
  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    if (!grade) return;
    setIsShow(!isShow);
  };

  return (
    <MoviePosterImage onClick={showModal}>
      {isShow && <Modal imgSrc={IMG} overview={movieOverview} />}
      {grade ? (
        <>
          <LankedPoster alt="rankedMovie" src={grade[index]} />
          <LankedPoster alt="rankedMovie" src={IMG} />
        </>
      ) : (
        <Poster alt="rankedMovie" src={IMG} />
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

const Poster = styled.img`
  width: 300px;
  height: 200px;
`;

const LankedPoster = styled(Poster)`
  width: 150px;
  height: 250px;
`;

export default MoviePoster;
