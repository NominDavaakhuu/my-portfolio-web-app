import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useTitle } from "../hooks/useTitle";

const Portfolio = ({apiPath}) => {
  useTitle("Portfolio")
  
  const {data: projects, isLoading,error}= useFetch(apiPath);
  //error,loading response
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>; 
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto">
        <h1 className="text-justify py-5 m-10">Over the past several months as an IT student, I've dedicated myself to a series of significant endeavors, each representing a milestone in my journey towards mastering the foundational principles of technology.
          These projects, ranging from small-scale applications to comprehensive solutions, have served as invaluable learning opportunities, enabling me to deepen my understanding of key concepts and methodologies within the field.
        </h1>
        <div className="flex justify-start flex-wrap">
          {projects.map((project, index)=>(
            <Card key={index} project={project}/>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Portfolio;