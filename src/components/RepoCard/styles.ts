import styled, { css } from 'styled-components';

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
  --primary: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--primary);
`;

export const Header = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--link);

      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 0.5rem 0 1rem;
    color: var(--gray);
    font-size: 0.7rem;
  }
`;

export const Footer = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      > span {
        margin-left: 0.3rem;
        font-size: 0.7rem;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background: var(--other-language);
    }

    &.typescript {
      background: var(--typescript);
    }

    &.javascript {
      background: var(--javascript);
    }
  }
`;

const iconCSS = css`
  width: 1rem;
  height: 1rem;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
