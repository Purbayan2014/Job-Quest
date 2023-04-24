import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY, RAPID_API_HOST } from '@env'; 

// const rapidapikey = RAPID_API_KEY;
// const rapidapihost = RAPID_API_HOST

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

//   axios api config for fetching the data from the endpoint
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '947e5574f0mshfbd02b5313d6af7p1d2318jsn427c7fa61cec',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

  const fetchData = async () => {
    setIsLoading(true);

    // fetching the data 
    // if any error has been seen handle it 
    // properly
    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;