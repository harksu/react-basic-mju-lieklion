import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import BoardCell from "./BoardCell";
import "../styles/BoardStyle.scss";
import { isTurn, pickCell } from "./../atoms/atom";

const Board = () => {
  const turn = useRecoilValue(isTurn);
  const pickArray = useRecoilValue(pickCell);
  const [winner, setWinner] = useState("");
  const cellArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const victoryCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]; //이건 나중에 상수로 빼고
  useEffect(() => {
    for (let i = 0; i < victoryCondition.length; i++) {
      const [a, b, c] = victoryCondition[i];
      if (
        pickArray[a] &&
        pickArray[a] === pickArray[b] &&
        pickArray[a] === pickArray[c]
      ) {
        a === "o" ? setWinner("player1") : setWinner("player2");
      }
    }
  }, [pickArray]); //왜 의존성을 이해를 못하지..?
  const boardCell = cellArray.map((cell) => (
    <BoardCell number={cell} key={cell} winner={winner} />
  ));

  return (
    <>
      {winner && <h1>{`winner : ${winner}`}</h1>}
      <h1>{`turn : ${turn}`}</h1>
      <div className="BoardContainer">{boardCell}</div>
    </>
  );
};

export default Board;
