import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [originalData, setOriginalData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error('Network response was not OK');
                }
                const data = await response.json();
                setData(data);
                setOriginalData(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }        

        fetchData();
    }, [url]);

    return {data, loading, error, originalData, setData};
}

export default useFetch