"use client";
import React from "react";
import * as S from "../../styles/signup/page.style";
import NavBar from "@/components/navbar/NavBar";
import { PageLayout } from "@/components/layout/PageLayout";

const SignupPage = () => {
  return (
    <>
      <PageLayout>
        <S.Form>
          <S.Input>
            <S.InputTitle>이름</S.InputTitle>
            <S.InputContent placeholder="이름 입력"></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>이메일</S.InputTitle>
            <S.DoubleCheckWrapper>
              <S.InputContentTwo
                placeholder="이메일 입력"
                type="email"
                required
              ></S.InputContentTwo>
              <S.DoubleCheckButton>중복 확인</S.DoubleCheckButton>
            </S.DoubleCheckWrapper>
            {/* {isDoubleText !== "" ? (
                isDoubleText === "중복된 이메일로 가입된 계정이 있습니다." ? (
                  <S.DisableText>{isDoubleText}</S.DisableText>
                ) : (
                  <S.AvailableText>{isDoubleText}</S.AvailableText>
                )
              ) : (
                <S.DisableText>이메일 중복 확인을 해주세요.</S.DisableText>
              )} */}
          </S.Input>
          <S.Input>
            <S.InputTitle>전화번호</S.InputTitle>
            <S.DoubleCheckWrapper>
              <S.InputContentTwo placeholder="- 없이 입력"></S.InputContentTwo>
              <S.DoubleCheckButton>중복 확인</S.DoubleCheckButton>
            </S.DoubleCheckWrapper>
            {/* {isPhoneDoubleText !== "" ? (
                isPhoneDoubleText ===
                "중복된 전화번호로 가입된 계정이 있습니다." ? (
                  <S.DisableText>{isPhoneDoubleText}</S.DisableText>
                ) : (
                  <S.AvailableText>{isPhoneDoubleText}</S.AvailableText>
                )
              ) : (
                <S.DisableText>전화번호 중복 확인을 해주세요.</S.DisableText>
              )} */}
          </S.Input>
          {/* <S.Input>
      <S.InputTitle>인증번호</S.InputTitle>
      <S.InputContent
        {...register("authNumber", {
          required: "인증번호를 입력해주세요.",
        })}
        placeholder="인증번호 입력"
      ></S.InputContent>
    </S.Input> */}
          <S.Input>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.InputContent
              placeholder="8 ~ 16자리 영문, 숫자, 특수문자 포함"
              type="password"
            ></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <S.InputContent
              placeholder="비밀번호 재입력"
              type="password"
            ></S.InputContent>
          </S.Input>
          {/* <NavBar navText="다음" /> */}
        </S.Form>
      </PageLayout>
      <NavBar active={true} navText="다음" />
    </>
  );
};

export default SignupPage;
