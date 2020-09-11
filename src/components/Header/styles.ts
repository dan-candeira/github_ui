import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Navigation = styled.header`
  width: 100%;
  background: var(--header);

  nav {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: var(--header);
    max-width: var(--max-width);
    width: 95%;
    flex-wrap: wrap;
    padding: 0.7rem 0;

    > a {
      width: fit-content;
      height: fit-content;
      text-decoration: none;
      border-radius: 50%;
    }

    * {
      margin-top: 0.7rem;
    }

    span {
      color: var(--primary);
      margin-left: auto;
    }

    @media (min-width: 768px) {
      flex-direction: row;

      * {
        margin-top: 0;
      }
    }
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const SearchForm = styled.form`
  width: fit-content;
  margin: 0 auto;

  input {
    background: var(--search);
    outline: 0;
    width: fit-content;
    min-width: 19rem;
    border-radius: 1.5rem;
    padding: 0.5rem 2rem;
    color: var(--primary);
  }

  @media (min-width: 768px) {
    margin-right: 0;
    margin-left: 15%;
  }
`;
