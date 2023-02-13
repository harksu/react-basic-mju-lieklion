import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Counter from "./components/Counter";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

export default App;
