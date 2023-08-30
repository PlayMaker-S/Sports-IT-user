"use client";
import GoBackHeader from "@/components/header/GoBackHeader";
import React from "react";
import { styled } from "styled-components";
import * as S from "../../styles/signup/layout.style";
import NavBar from "@/components/navbar/NavBar";

const SignupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.SignupContainer>
      <GoBackHeader />
      {children}
      <NavBar active={true} navText="다음" />
    </S.SignupContainer>
  );
};

export default SignupLayout;
