import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default MainPage;
