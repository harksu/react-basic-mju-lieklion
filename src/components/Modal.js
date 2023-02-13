import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isModal } from "../atoms/atom";

const Modal = ({ imgSrc, overview }) => {
  const [, setIsShow] = useRecoilState(isModal);
  const closeModal = () => {
    setIsShow(false);
  };
  return (
    <ModalContainer onClick={closeModal}>
      <ModalImage alt="movieDetail" src={imgSrc} />
      <ModalContent>
        <ModalMovieStory>
          <MovieLimitText>
            98% 일치 2022 18 에피소드6개 HD ADD 댓글그림
          </MovieLimitText>
          <MovieStoryText>{overview}</MovieStoryText>
        </ModalMovieStory>
        <ModalMovieActor>
          <MovieActorText>출연 : 임학수</MovieActorText>
          <MovieActorText>감독 : 임학수 </MovieActorText>
          <MovieActorText>시리즈 특징 : 특징이 있는</MovieActorText>
        </ModalMovieActor>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 80%;
  height: 80%;
  margin: auto;
  padding: 10px;
`;

const ModalImage = styled.img`
  width: 80%;
  height: 80%;
  background-color: black;
  object-fit: contain;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 20%;
  margin: auto;
  background-color: black;
`;

const ModalMovieStory = styled.div`
  height: 80%;
`;

const ModalMovieActor = styled.div`
  height: 80%;
`;
const MovieLimitText = styled.div``;
const MovieActorText = styled.p`
  margin-top: 10px;
`;

const MovieStoryText = styled.p`
  margin-top: 15px;
  font-size: 20px;
`;
export default Modal;
