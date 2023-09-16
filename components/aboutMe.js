import React from 'react';
import styled from 'styled-components';

// Styled components for styling
const AboutMeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Avatar = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const Bio = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2>About Me</h2>
      <Avatar src="/path/to/your/avatar.jpg" alt="Developer Avatar" />
      <Bio>
       I am Jacob Gonzalez, i want to learn more about code and make projects i never imagined i could make before.
      </Bio>
    </AboutMeContainer>
  );
};

export default AboutMe;