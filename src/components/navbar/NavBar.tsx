// "use client";
import { NavBarProps } from "@/interfaces/navInterface";
import React from "react";
import * as S from "../../styles/components/navbar/NavBar.style";

const NavBar = ({ active, navText }: NavBarProps) => {
  return (
    <S.NavArea disabled={!active} active={active}>
      <S.NavText active={active}>{navText}</S.NavText>
    </S.NavArea>
  );
};

export default NavBar;
