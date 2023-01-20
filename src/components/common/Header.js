import React from "react";
import { BiBell, BiConfused, BiDownArrow, BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";
import { MENU_ARRAY } from "../../datas/data";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>NETFLIX</HeaderTitle>
      <HeaderMenuBox>
        {MENU_ARRAY.map((item) => (
          <HeaderMenuItem>{item}</HeaderMenuItem>
        ))}
      </HeaderMenuBox>
      <HeaderSiedMenuBox>
        <HeaderSideMenu>
          <BiSearchAlt size="24" />
          <BiBell size="24" />
          <BiConfused size="24" />
          <BiDownArrow size="24" />
        </HeaderSideMenu>
      </HeaderSiedMenuBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  margin-left: 20px;
  color: red;
`;

const HeaderMenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
  width: 40%;
`;

const HeaderMenuItem = styled.h3`
  font-size: 15px;
  margin: 0 5px 0 5px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderSiedMenuBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 20px;
`;

const HeaderSideMenu = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  & > :hover {
    cursor: pointer;
  }
`;

export default Header;
