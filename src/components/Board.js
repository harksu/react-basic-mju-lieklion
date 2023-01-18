import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import BoardCell from "./BoardCell";
import { VICTORY_CONDITION } from "../datas/data";
import { isTurn, pickCell } from "./../atoms/atom";
import "../styles/BoardStyle.scss";

const Board = () => {
  const turn = useRecoilValue(isTurn);
  const pickArray = useRecoilValue(pickCell);
  const [winner, setWinner] = useState("");
  const cellArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const victoryCondition = VICTORY_CONDITION;

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
  }, [victoryCondition, pickArray]); //왜 의존성을 이해를 못하지..? => 일단 설명서에 맞게 세팅하긴 했는데 추후 이해해보면 좋을 듯

  const boardCell = cellArray.map((cell) => (
    <BoardCell number={cell} key={cell} winner={winner} />
  ));
  //이걸 따로 빼는게 가독성이 개인적으로 더 좋은 것 같다.

  return (
    <>
      {winner && <h1>{`winner : ${winner}`}</h1>}
      <h1>{`turn : ${turn}`}</h1>
      <div className="BoardContainer">{boardCell}</div>
    </>
  );
};

export default Board;
