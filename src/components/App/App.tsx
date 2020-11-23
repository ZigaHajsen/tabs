import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import {
  SectionLoading,
  Loading,
  Section,
  Title,
  Experience,
  Underline,
  JobsCenter,
  ButtonContainer,
  JobButton,
  JobInfo,
  JobInfoTitle,
  JobInfoCompany,
  JobInfoDate,
  JobDescription,
  JobDescriptionText,
} from './AppStyles';

const url = 'https://course-api.com/react-tabs-project';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<any>([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <SectionLoading>
        <Loading>loading...</Loading>
      </SectionLoading>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <Section>
      <Title>
        <Experience>experience</Experience>
        <Underline></Underline>
      </Title>
      <JobsCenter>
        <ButtonContainer>
          {jobs.map((item: any, index: number) => {
            return (
              <JobButton key={item.id} onClick={() => setValue(index)}>
                {item.company}
              </JobButton>
            );
          })}
        </ButtonContainer>
        <JobInfo>
          <JobInfoTitle>{title}</JobInfoTitle>
          <JobInfoCompany>{company}</JobInfoCompany>
          <JobInfoDate>{dates}</JobInfoDate>
          {duties.map((duty: any, index: number) => {
            return (
              <JobDescription key={index}>
                <FaAngleDoubleRight />
                <JobDescriptionText>{duty}</JobDescriptionText>
              </JobDescription>
            );
          })}
        </JobInfo>
      </JobsCenter>
    </Section>
  );
};

export default App;
