import React, { useState, useEffect } from 'react';

const ContentHome = () => {

  const [activity, setActivity] = useState();
  const [loading, setLoading] = useState();

  const loadData = async () => {
    setLoading(true);
    // const result = await fetch('https://api.mini-diarium.id/activity');
    const result = await fetch(`${process.env.API_BASE_URL}/activity`);
    const data = result.json();

    setActivity(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []); // componentDidMount

  return (
    <div>
      Content Home
      {
        loading ? (
          <p>Loading...</p>
        ) : (
            <div>
              {activity}
            </div>
          )
      }
    </div>
  )
};

export default ContentHome;
