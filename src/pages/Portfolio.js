import { useTitle } from "../hooks/useTitle";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
const BASE_URL='https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUWg4JJ8Hgsqry0IwKbWfLxQ&key=AIzaSyCkenMxE5N8Zavnp_6eRZEATQoyOIgomDM';

export const Portfolio = () => {
  useTitle("Portfolio");
  const[Error,setError]=useState();
  const [isLoading,setIsLoading]=useState(false);
  const[projects, setProjects]=useState([]);
  useEffect(()=> {
    async function fetchProjects(){
      setIsLoading(true);
      //fetch request
      try{ const response =await fetch(BASE_URL);
        const data= await response.json();
        const projectItems = data.items.map(item => item.snippet)
        //if successful ->set project
        setProjects(projectItems);
      //error handler
      } catch(e){
        setError(e);
      } //regardless of any situation Loading will be set to false
      finally{
        setIsLoading(false);
      }
      setIsLoading(false);
    }
    fetchProjects();
  },[])
  if (isLoading){
    return<div>Loading...</div>
  }
  if(Error){
    return <div className="text-red-500">Something went wrong! Please try again.</div>
  }
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <h1 className="title-font text-white dark:text-gray-900 font-semibold  m-10">Over the past several months as an IT student, I've dedicated myself to a series of significant endeavors, each representing a milestone in my journey towards mastering the foundational principles of technology.
          These projects, ranging from small-scale applications to comprehensive solutions, have served as invaluable learning opportunities, enabling me to deepen my understanding of key concepts and methodologies within the field.As I look to the future, my aspirations extend far beyond mere completion of assignments; 
           I am driven by a fervent desire to embark on new ventures, to explore uncharted territories, and to further refine my craft."
        </h1>
        <div className="flex justify-start flex-wrap">
          {projects.map((project, projectTitle)=>(
            <Card key={projectTitle} project={project}/>
          ))}
        </div>
      </section>
    </main>
  )
}