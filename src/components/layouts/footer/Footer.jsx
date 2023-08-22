import * as S from "./style";

// https://react-icons.github.io/react-icons/

import { AiFillHome } from "react-icons/ai";
export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterIcon>
        <AiFillHome />홈
      </S.FooterIcon>

      <S.FooterIcon>게시판</S.FooterIcon>
      <S.FooterIcon>지도</S.FooterIcon>
      <S.FooterIcon>채팅</S.FooterIcon>
      <S.FooterIcon>내정보</S.FooterIcon>
    </S.FooterWrapper>
  );
}
