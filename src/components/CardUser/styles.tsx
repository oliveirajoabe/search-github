import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 100px;
    background-color: ${theme["dark-purple"]};
    border-radius: 8px;
    padding: 1.5rem;
  `}
`;

export const Content = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Footer = styled.footer`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  > a {
    width: 100%;
    text-decoration: none;
  }
`;

export const WrapperBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  hr {
    border-style: dashed;
  }
`;

export const WrapperUser = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    > div {
      display: flex;
      gap: 10px;

      > small {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      :first-child {
        &::after {
          content: "";
          background-color: ${theme.grey};
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }
      }
    }
  `}
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const LinkStyle = styled.a`
  ${({ theme }) => css`
    text-decoration: underline;
    color: ${theme.grey};

    &:hover {
      opacity: 0.5;
    }
  `}
`;

export const WrapperInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > span {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      a {
        color: ${theme.grey};
        &:hover {
          opacity: 0.5;
        }
      }

      > svg {
        font-size: 1.5rem;
      }
    }
  `}
`;
