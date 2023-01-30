import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import Modal from "./Modal";
const MoviePoster = ({ imgSrc, grade, index }) => {
  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    if (!grade) return;
    setIsShow(!isShow);
  };

  return (
    <MoviePosterImage onClick={showModal}>
      {isShow && <Modal imgSrc={imgSrc} />}
      {grade ? (
        <>
          <Test2 alt="rankedMovie" src={grade[index]} />
          <Test2 alt="rankedMovie" src={imgSrc} />
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

const Test = styled.img`
  //object-fit: cover;
  width: 300px;
  height: 200px;
`;

const Test2 = styled(Test)`
  width: 150px;
  height: 250px;
`;

export default MoviePoster;
