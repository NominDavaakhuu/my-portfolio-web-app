import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {CardDetailed} from "../components/CardDetailed";
import { Button } from "../components/Button";
import {Link} from "react-router-dom";

const ProjectDetail = ({apiPath}) => {
  //extract title param from URL
  const { title } = useParams(); 
  //destructures data property from the result into const named projects
  const {data: projects}= useFetch(apiPath);
  const matchingProjects = projects.filter(project => project.title === title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 grid grid-cols-2">
        <div className="place-content-center">
           <div className="pb-10">
             <Link to="/portfolio">
                <Button> 
                  <svg className="w-6 h-6 text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                  </svg>
                  Back To Portfolio
                  </Button>
              </Link>  
            </div>
            <h1 className=" text-gray-900 text-4xl font-semibold uppercase">Project: {title}</h1>
        </div>
        <div className="flex justify-center flex-wrap">
          {matchingProjects.map((project, index) => (
          <CardDetailed key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default ProjectDetail;