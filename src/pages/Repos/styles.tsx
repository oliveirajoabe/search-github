import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 20rem;

  @media (max-width: 576px) {
    padding: 5rem 2rem;
  }
  @media (min-width: 577px) and (max-width: 992px) {
    padding: 5rem 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    margin-top: 10px;
  }
`;
