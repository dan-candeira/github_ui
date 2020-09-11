import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

/* eslint-disable */
const Profile = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">23</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line" role="separator"></span>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={'daniel.candeira'}
            name="Daniel Candeira"
            avatarUrl={'https://api.adorable.io/avatars/face/eyes7'}
            followers={1000}
            following={10}
            company={'Dreamers'}
            location={'Brasília, Brazil'}
            email={'danielbarr16@gmail.com'}
            blog={undefined}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" role="separator"></span>
          </Tab>
          <Repos>
            <h2>Radom repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={'daniel.candeira'}
                  reponame={'just do it!'}
                  description={'Contains a bunch of stuff'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={40}
                  forks={10}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>Ramdom Calendar (do not represent actual data)</CalendarHeading>

          <RandomCalendar></RandomCalendar>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
