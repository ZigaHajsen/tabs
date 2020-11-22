import React, { useState, useEffect } from 'react';
const url = 'https://course-api.com/react-tabs-project';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
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

  return <h2>jobs</h2>;
};

export default App;
