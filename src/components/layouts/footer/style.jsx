import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 9.3rem;
  padding: 0 2.5rem;
  padding-bottom: 3.9rem;
  color: ${(props) => props.theme.colors.primary1};
  border: 0.1rem solid;
  border-color: ${(props) => props.theme.colors.gray4};

  font-size: 2rem;
  font-weight: 800;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterIcon = styled.div`
  font-size: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  svg {
    font-size: 1.9rem;
    padding-bottom: 0.6rem;
  }
`;
