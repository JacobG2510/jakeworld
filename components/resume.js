import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ResumeLink = styled.a`
  text-decoration: none;
  color: #0074d9;
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 20px;
`;

const ProficienciesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ProficiencyItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Resume = () => {
  const resumeUrl = '/path/to/your/resume.pdf';

  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'SQL',
  ];

  return (
    <ResumeContainer>
      <h2>Resume</h2>
      <ResumeLink href={resumeUrl} target="_blank" rel="noopener noreferrer">
        Download Resume
      </ResumeLink>
      <h3>Proficiencies</h3>
      <ProficienciesList>
        {proficiencies.map((proficiency, index) => (
          <ProficiencyItem key={index}>{proficiency}</ProficiencyItem>
        ))}
      </ProficienciesList>
    </ResumeContainer>
  );
};

export default Resume;




