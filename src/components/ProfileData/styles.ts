import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 1.3rem;

    > h1 {
      font-size: 1.6rem;
      line-height: 1.25;
      color: var(--dark-gray);
    }

    > h2 {
      font-size: 1rem;
      color: var(--username);
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 2rem;
    }
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 15%;

  @media (min-width: 768px) {
    width: 70%;
    margin-left: 1%;
    margin-right: 20%;
  }
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 1.2rem 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 0.8rem;
      color: var(--gray);
    }

    > strong {
      font-weight: 600;
      color: var(--back);
    }

    > * {
      margin-right: 0.5rem;
    }
  }
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }

  span {
    margin-left: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: no-wrap;
  }
`;

const iconCSS = css`
  width: 1rem;
  height: 1rem;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`;
export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;
export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`;
export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;
