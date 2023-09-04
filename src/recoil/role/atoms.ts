import { ApplyRoleAtomType, RoleAtomType } from "@/interfaces/roleInterface";
import { atom } from "recoil";

export const roleAtom = atom<RoleAtomType>({
  key: "role",
  default: "ROLE_USER",
});

export const applyRoleAtom = atom<ApplyRoleAtomType>({
  key: "applyRole",
  default: "player",
});
