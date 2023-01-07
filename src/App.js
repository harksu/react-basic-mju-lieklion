import "./App.css";
import React from "react";
import { RecoilRoot } from "recoil";
import Board from "./components/Board";

function App() {
  return (
    <RecoilRoot>
      <Board />;
    </RecoilRoot>
  );
}

export default App;
