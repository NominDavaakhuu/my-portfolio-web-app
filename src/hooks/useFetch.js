import {useState, useEffect} from 'react';
export const useFetch = (apiPath) => {
  const [data, setData]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url= `https://youtube.googleapis.com/youtube/v3/${apiPath}=${process.env.REACT_APP_API_KEY}`;
  
  useEffect(()=> {
      async function fetchProjects(){

      setIsLoading(true); //sets isLoading before fetching
      try {
        const response =await fetch(url); //request to url & waits for the response
        const json= await response.json(); //waits for the JSON parsing to complete before moving on
        //extracts snippet property from each item in the items array of JSONdata.
        //creates a new array projectItems containing only the snippet objects(only neccessary data)
        const projectItems = json.items.map(item => item.snippet)
        setData(projectItems); 
      } catch (error) { //catches errors that occur during fetchProjects()
        setError(error);
      } finally{
        setIsLoading(false); //as fetching is complete loading is set to false
      }
    };
    fetchProjects();
  },[url]);
//returns an object with a data property containing fetched projects
  return (
    {data,isLoading,error}
  )
}
