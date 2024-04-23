import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";

const Portfolio = ({apiPath}) => {
  const {data: projects}= useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <h1 className="title-font text-gray-900 font-semibold  m-10">Over the past several months as an IT student, I've dedicated myself to a series of significant endeavors, each representing a milestone in my journey towards mastering the foundational principles of technology.
          These projects, ranging from small-scale applications to comprehensive solutions, have served as invaluable learning opportunities, enabling me to deepen my understanding of key concepts and methodologies within the field.As I look to the future, my aspirations extend far beyond mere completion of assignments; 
           I am driven by a fervent desire to embark on new ventures, to explore uncharted territories, and to further refine my craft."
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