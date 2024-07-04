// src/components/EuroData.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEuroData } from '../euroActions';

const EuroData = () => {
  const dispatch = useDispatch();
  const euroData = useSelector((state) => state.euroData);

  useEffect(() => {
    dispatch(fetchEuroData());
  }, [dispatch]);

  return (
    <div>
      {euroData.loading && <p>Loading...</p>}
      {euroData.error && <p>Error: {euroData.error}</p>}
      {euroData.data && (
        <div>
          <h2>Euro 2024 Data</h2>
          {euroData.data.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              {/* Add more data fields as necessary */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EuroData;
