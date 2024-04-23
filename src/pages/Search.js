import { useState, useEffect } from 'react';
import { useTitle } from "../hooks/useTitle";
import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

//accepts prop 'apiPath'
const Search = ({apiPath}) => {
  //useLocation hook from RRDOM to get current location object
  const location = useLocation();
  //extracts the query parameter q from the URL using URLSearchParams,stores it in queryTerm
  const queryParams = new URLSearchParams(location.search);
  const queryTerm = queryParams.get('q');
  //passes Queryterm as an arg
  const { data: projects } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

 //state will hold filtered search results
  const [searchResults, setSearchResults] = useState([]);
//filters project based on their title,description,date
  useEffect(() => {
    if ( projects.length > 0 && queryTerm) {
      const filteredResults = projects.filter(project => 
        project.title.toLowerCase().includes(queryTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(queryTerm.toLowerCase()) ||
        project.publishedAt.toLowerCase().includes(queryTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [queryTerm, projects]);
//maps over the searchResults arr & renders a 
//Card component for each project in the array
  return (
    <div>
      <p className="text-4xl text-gray-700 m-14">{ searchResults.length === 0 ? `No result found for '${queryTerm}'` : `Result for : '${queryTerm}'` }</p>
      <div className="flex justify-center flex-wrap my-20">
          {searchResults.map((project, index) => (
          <Card key={index} project={project} />
          ))}
        </div>
    </div>
  );
};

export default Search;
