import React from "react";
import styled from "styled-components";
import { useRecoilState, useResetRecoilState } from "recoil";
import { count } from "../atoms/atom";

const Counter = () => {
  const [countValue, setCountValue] = useRecoilState(count);
  //[0] = useRecoilValue, //[1] == useSetRecoilState이므로 생략
  const resetCountValue = useResetRecoilState(count);
  const COUNT_CASE = ["up", "down", "reset"];

  const UpOrDown = (feat) => {
    if (!COUNT_CASE.includes(feat)) return;
    if (feat === COUNT_CASE[0])
      setCountValue(countValue + 1); //여기서 전치 후치 연산자 안먹음
    else if (feat === COUNT_CASE[1]) setCountValue(countValue - 1);
    else resetCountValue();
  };

  return (
    <CountContainer>
      <CountValue>{countValue}</CountValue>
      <ButtonBox>
        {COUNT_CASE.map((item) => {
          return (
            <CounterButton
              onClick={() => {
                UpOrDown(item);
              }}
            >
              {item}
            </CounterButton>
          );
        })}
      </ButtonBox>
    </CountContainer>
  );
};

const CountContainer = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
  margin: auto;
`;

const ButtonBox = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterButton = styled.button`
  width: 33%;
  height: 100px;
`;

const CountValue = styled.p`
  font-size: 100px;
  color: orange;
`;

export default Counter;
