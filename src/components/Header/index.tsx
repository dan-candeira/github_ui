import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Navigation>
      <nav>
        <Link to={'/'}>
          <GithubLogo />
        </Link>
        <SearchForm>
          <input type="text" placeholder="Enter Username or Repo ..."></input>
        </SearchForm>
        <span>darkmode</span>
      </nav>
    </Navigation>
  );
};

export default Header;
