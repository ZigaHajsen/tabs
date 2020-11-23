import styled from 'styled-components/macro';

export const SectionLoading = styled.section`
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);
  text-align: center;

  @media (min-width: 992px) {
    width: 95vw;
  }
`;

export const Loading = styled.h1``;

export const Section = styled.section`
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);

  @media (min-width: 992px) {
    width: 95vw;
  }
`;

export const Title = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

export const Experience = styled.h2``;

export const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
`;

export const JobsCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const JobButton = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  outline-color: var(--clr-primary-10);

  &:hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
`;

export const JobInfo = styled.article``;

export const JobInfoTitle = styled.h3`
  font-weight: 400;
`;

export const JobInfoCompany = styled.h4`
  text-transform: uppercase;
  color: var(--clr-grey-5);
  background: var(--clr-grey-9);
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
`;

export const JobInfoDate = styled.p`
  letter-spacing: var(--spacing);
`;

export const JobDescription = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const JobDescriptionText = styled.p`
  margin-bottom: 0;
  color: var(--clr-grey-3);
`;
