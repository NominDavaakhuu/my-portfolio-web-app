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
      <section className="max-w-7xl mx-auto py-24 grid grid-cols-1 md:grid-cols-2">
        <div className="place-content-center md:text-center">
           <div className="pb-10">
             <Link to="/portfolio">
                <Button>Back To Portfolios</Button>
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