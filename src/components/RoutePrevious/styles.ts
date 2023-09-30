import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 1rem;

    > button {
      display: flex;
      gap: 0.5rem;
      color: ${theme.grey};
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
  `}
`;
