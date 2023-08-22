import { styled } from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2.5rem;
  color: ${(props) => props.theme.colors.primary1};
  border: 0.1rem solid;
  border-color: ${(props) => props.theme.colors.gray4};

  font-size: 2rem;
  font-weight: 800;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
