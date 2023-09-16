import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #f2f2f2;
    }
  }

  .active {
    color: #f2f2f2;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Your Name</Logo>
        <Navigation>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active">
                Resume
              </NavLink>
            </li>
          </ul>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;