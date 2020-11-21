import React from 'react';
import styled from 'styled-components';


const PostHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ProfileGroup = styled.div`
  display: flex;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileUsername = styled.div`

`;
const ProfileLocation = styled.div`

`;

interface Props {
  username: string;
  location?: string;
}

const PostHeader: React.FC<Props> = ({ username, location }) => {
  return (
    <PostHeaderWrapper>
      <ProfileGroup>
        <ProfileImg src="/profile_default.png" />
        <ProfileInfo>
          <ProfileUsername>{username}</ProfileUsername>
          <ProfileLocation>{location}</ProfileLocation>
        </ProfileInfo>
      </ProfileGroup>


      <div>d</div>
    </PostHeaderWrapper>
  );
};

export default PostHeader;