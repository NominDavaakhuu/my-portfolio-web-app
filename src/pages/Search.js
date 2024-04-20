import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  //acces to query
  const queryTerm = searchParams.get("q");
  //pass query
  const { data: projects } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ projects.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { projects.map((project) => (
            <Card key={project.title} project={project} />
          )) }          
        </div>
      </section>
    </main>
  )
}
export default Search;