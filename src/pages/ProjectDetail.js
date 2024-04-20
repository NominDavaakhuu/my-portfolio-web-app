import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";

//FIX

const ProjectDetail = ({apiPath, projectTitle}) => {
  const {data: projects}= useFetch(apiPath);
  useTitle("Project Detail");
  const filteredProjects = projects.filter(project => project.title === projectTitle);
  return (
    <section className="max-w-7xl mx-auto py-7">
    <h1 className="title-font text-gray-900 font-semibold  m-10"> PROJECT: </h1>
    <div className="flex justify-start flex-wrap">
      {filteredProjects.length > 0 ? (
        filteredProjects.map(project => <Card key={projectTitle} project={project} />)
      ) : (
        <p>No project found with title "{projectTitle}"</p>
      )}
    </div>
  </section>
  );
};
export default ProjectDetail;

