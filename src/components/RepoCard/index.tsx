import React from 'react';
import { Container, Header, RepoIcon, Footer, ForkIcon, StarIcon } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({ username, reponame, description, language, stars, forks }) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <Header>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </Header>
      <Footer>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default RepoCard;
