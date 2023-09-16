import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
      <SocialLinks>
        <SocialLink href="https://github.com/JacobG2510" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/Jacob Gonzalez" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
        {/* Add links to other social profiles if needed */}
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;