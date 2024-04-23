import {useState, useEffect} from 'react';
export const useFetch = (apiPath) => {
  const [data, setData]=useState([]);
  const url= `https://youtube.googleapis.com/youtube/v3/${apiPath}=${process.env.REACT_APP_API_KEY}`;
  useEffect(()=> {
      async function fetchProjects(){
      try {
        //request to url & waits for the response
        const response =await fetch(url);
        //if response is not ok? throw an error with the message
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        //waits for the JSON parsing to complete before moving on
        const json= await response.json();
        //extracts snippet property from each item in the items array of JSONdata.
        //creates a new array projectItems containing only the snippet objects(only neccessary data)
        const projectItems = json.items.map(item => item.snippet)
        //array as the new state value
        setData(projectItems);
        //catches errors that occur during fetchProjects(),error?log to console
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProjects();
  },[url]);
//returns an object with a data property containing fetched projects
  return (
    {data}
  )
}
