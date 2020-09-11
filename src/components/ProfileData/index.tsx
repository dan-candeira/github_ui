import React from 'react';

import {
  Container,
  Flex,
  Avatar,
  Row,
  Column,
  PeopleIcon,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from './styles';

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={name} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <strong>{followers}</strong>
          <span role="text">followers</span>
          <span>·</span>
        </li>
        <li>
          <strong>{following}</strong>
          <span role="text">following</span>
        </li>
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span role="text">{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span role="text">{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span role="text">{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span role="text">{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
