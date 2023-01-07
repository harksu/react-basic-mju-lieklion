import "../styles/BoardCellStyle.scss";
import { isTurn, pickCell } from "../atoms/atom";
import { useState } from "react";
import { useRecoilState } from "recoil";

const BoardCell = ({ number, winner }) => {
  const [turn, setTurn] = useRecoilState(isTurn);
  const [pickArray, setPickArray] = useRecoilState(pickCell);
  const [check, setCheck] = useState(false);
  const [mark, setMark] = useState("");

  const handleClick = (turn) => {
    setCheck(true);
    if (turn === "player1") {
      findVictory(number, "o");
      setMark("o");
      setTurn("player2");
    } else if (turn === "player2") {
      findVictory(number, "x");
      setMark("x");
      setTurn("player1");
    } else return;
  };

  const findVictory = (number, mark) => {
    const newArray = [...pickArray];
    newArray[number] = mark;
    setPickArray(newArray);
  };

  return (
    <div
      onClick={() => {
        if (check || winner) return;
        handleClick(turn);
      }}
      className="BoardCell"
    >
      {check ? `${mark}` : " "}
    </div>
  );
};

export default BoardCell;
