import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
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
      <section>
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section>
      <div>
        <h2>experience</h2>
        <div></div>
      </div>
      <div>
        <div>
          {jobs.map((item: any, index: number) => {
            return (
              <button key={item.id} onClick={() => setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>
        <article>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((duty: any, index: number) => {
            return (
              <div key={index}>
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
