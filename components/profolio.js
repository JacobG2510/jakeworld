import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const ProjectLinks = styled.div`
  margin-top: 10px;
  a {
    margin-right: 10px;
    text-decoration: none;
    color: #0074d9;
    font-weight: bold;
    font-size: 16px;
  }
`;

const Portfolio = () => {
  // Define an array of portfolio projects
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      demoLink: 'https://demo-link-project-1.com',
      githubLink: 'https://github.com/yourusername/project-1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      demoLink: 'https://demo-link-project-2.com',
      githubLink: 'https://github.com/yourusername/project-2',
    },
    
  ];

  return (
    <PortfolioContainer>
      <h2>Portfolio</h2>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectList>
    </PortfolioContainer>
  );
};

export default Portfolio;