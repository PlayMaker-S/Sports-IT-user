"use client";
import React from "react";
import * as S from "../../../styles/signup/select-role/page.style";
import { roleAtom } from "@/recoil/role/atoms";
import { RoleAtomType } from "@/interfaces/roleInterface";
import { useRecoilState } from "recoil";
import { PageLayout } from "@/components/layout/PageLayout";
import NavBar from "@/components/navbar/NavBar";

const SelectRolePage = () => {
  const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  return (
    <>
      <PageLayout>
        <S.QuestionArea>
          <S.QuestionText>주최자 이신가요?</S.QuestionText>
          <S.QuestionText>체육인 이신가요?</S.QuestionText>
        </S.QuestionArea>
        <S.SelectArea>
          <S.SpoitorButton
            onClick={() => setRole("ROLE_INSTITUTION")}
            role={role}
          >
            <S.SporitorSelectIcon role={role} />
            <S.RoleArea>
              <S.Role>주최자</S.Role>
              <S.RoleDescription>
                대회를 개최하고 관리하고 싶어요.
              </S.RoleDescription>
            </S.RoleArea>
          </S.SpoitorButton>
          <S.SportyButton onClick={() => setRole("ROLE_USER")} role={role}>
            <S.SportySelectIcon role={role} />
            <S.RoleArea>
              <S.Role>체육인</S.Role>
              <S.RoleDescription>
                대회에 참여하고 정보를 얻고 싶어요.
              </S.RoleDescription>
            </S.RoleArea>
          </S.SportyButton>
        </S.SelectArea>
      </PageLayout>
      <NavBar navText="다음" active={true} />
    </>
  );
};

export default SelectRolePage;
