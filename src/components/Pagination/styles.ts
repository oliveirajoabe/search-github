import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    > ul {
      display: flex;
      gap: 1rem;

      list-style: none;

      li {
        cursor: pointer;
        background-color: ${theme["dark-purple"]};
        border-radius: 5px;
        &:hover {
          background-color: ${theme.purple};
        }
        a {
          box-shadow: none;
          padding: 1rem;
        }
      }

      .disabled {
        background-color: ${theme["ligth-purple"]};
        cursor: not-allowed;
        &:hover {
          background-color: ${theme["ligth-purple"]};
        }
      }

      .selected {
        background-color: ${theme.purple};
      }
    }
  `}
`;
