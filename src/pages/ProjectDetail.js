import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {CardDetailed} from "../components/CardDetailed";

const ProjectDetail = ({apiPath}) => {
  const { title } = useParams(); 
  const {data: projects}= useFetch(apiPath);
  const matchingProjects = projects.filter(project => project.title === title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 grid grid-cols-2">
        <h1 className=" text-gray-900 text-4xl font-semibold place-content-center uppercase">  Project: {title}</h1>
        <div className="flex justify-center flex-wrap my-10">
          {matchingProjects.map((project, index) => (
          <CardDetailed key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default ProjectDetail;