import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../euroActions'; // Ensure the euroActions file path is correct

const EuroData = () => {
    const dispatch = useDispatch();
    const euroData = useSelector((state) => state.euro.data);
    const loading = useSelector((state) => state.euro.loading);
    const error = useSelector((state) => state.euro.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Euro2024 Data</h1>
            <ul>
                {euroData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EuroData;