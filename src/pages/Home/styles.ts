import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 15rem;

  img {
    width: 40%;
    margin-top: 3rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    padding: 5rem 2rem;
  }
  @media (min-width: 577px) and (max-width: 1200px) {
    padding: 5rem 2rem;
  }
`;
