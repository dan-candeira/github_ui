import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri';

export const Container = styled.div`
  --vertical-padding: 24px;
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  overflow: hidden;

  padding: var(--vertical-padding) 0;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 73%;
    margin-left: 2%;
    height: 100%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--vertical-padding);

  > h2 {
    font-size: 1rem;
    font-weight: 500;
  }

  > div {
    margin-top: 0.5rem;

    display: grid;
    grid-gap: 1.5rem;

    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 0.75rem;
  margin: 3rem 0 0.6rem;
  display: inline-flex;
  color: var(--gray);
`;

export const RepoIcon = styled(RiBookMarkLine)``;

export const Tab = styled.div`
  background: var(--primary);
  margin-top: 1rem;

  .content {
    display: flex;
    align-items: center;

    width: min-content;

    padding: 0.9rem 1rem;

    border-bottom: 2px solid var(--orange);

    .label {
      font-size: 0.8rem;
      padding: 0 0.4rem;
      font-weight: 600;
      color: var(--gray);
    }

    .number {
      font-size: 0.7rem;
      background: var(--ticker);
      padding: 0.2rem 0.4rem;
      border-radius: 1.4rem;
    }
  }
  .line {
    display: flex;
    width: 100%;
    border-bottom: 1px solid var(--border);
  }

  &.mobile {
    margin-top: 1rem;
    .content {
      margin: 0 auto;
    }
  }

  &.desktop {
    display: none;
    margin-bottom: 2rem;
    margin-left: auto;
    width: 73%;
  }

  @media (min-width: 768px) {
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;
    }
  }
`;
