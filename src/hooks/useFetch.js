import {useState, useEffect} from 'react';
export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData]=useState([]);
  const url= `https://youtube.googleapis.com/youtube/v3/${apiPath}=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  useEffect(()=> {
      async function fetchProjects(){
      try {
        const response =await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json= await response.json();
        const projectItems = json.items.map(item => item.snippet)
        setData(projectItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProjects();
  },[url]);

  return (
    {data}
  )
}
