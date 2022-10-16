import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid var(--color-grey-3);

  button {
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    transition: 0.3s;
  }

  .container__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 26px 15px;
    width: 90%;
  }

  @media (min-width: 1024px) {
    button:hover {
      background-color: var(--color-grey-2);
      transition: 0.3s;
    }

    .container__header {
      width: 60%;
    }
  }
`;

export const Logo = styled.h1`
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Section = styled.section`
  border-bottom: 1px solid var(--color-grey-3);

  h3 {
    color: var(--color-grey-0);
    font-weight: 700;
  }

  h4 {
    color: var(--color-grey-0);
    font-size: 0.875rem;
  }

  p {
    color: var(--color-grey-1);
    font-size: 0.75rem;
  }

  .container__section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 0 auto;
    padding: 45px 15px;
    width: 90%;
  }

  @media (min-width: 1024px) {
    .container__section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 60%;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 23px;
  margin: 0 auto;
  padding: 34px 12px;
  width: 90%;

  .div__main {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .div__main svg {
    cursor: pointer;
  }

  .div__main rect {
    transition: 0.3s;
  }

  .div__main rect:hover {
    fill: var(--color-grey-2);
    transition: 0.3s;
  }

  h3 {
    color: var(--color-grey-0);
    font-weight: 700;
  }

  h4 {
    color: var(--color-grey-0);
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;
