"use client";
import React from "react";
import { styled } from "styled-components";
import * as S from "../../styles/login/page.style";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.ImageArea>
        <Image
          width={189}
          height={128}
          src="/images/logo/AppLogo_korean.png"
          alt="App logo"
        />
      </S.ImageArea>
      <S.Form>
        <S.Input placeholder="아이디(이메일)"></S.Input>
        <S.Input type="password" placeholder="비밀번호"></S.Input>
        <S.SubmitButton>로그인</S.SubmitButton>
        <div style={{ textDecoration: "underline" }}>
          카카오톡으로 로그인하기
        </div>
        <div style={{ textDecoration: "underline" }}>구글 로그인</div>
      </S.Form>
      <S.AccountPanel>
        <Link href="/auth/role-select">
          <S.AccountPanelText>회원가입</S.AccountPanelText>
        </Link>
        <Link href="/auth/findinfo">
          <S.AccountPanelText>아이디/비밀번호 찾기</S.AccountPanelText>
        </Link>
      </S.AccountPanel>
      <S.EasyLoginArea></S.EasyLoginArea>
    </S.LoginContainer>
  );
};

export default LoginPage;
