import { useTitle } from "../hooks/useTitle";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  useTitle("Portfolio");
  const[projects, setProjects]=useState([]);
  useEffect(()=> {
    async function fetchProjects(){
      //wait fetch request to complete
      const url=`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUWg4JJ8Hgsqry0IwKbWfLxQ&key=AIzaSyCkenMxE5N8Zavnp_6eRZEATQoyOIgomDM`
      const response =await fetch(url);
      //store it in data
      const data= await response.json();
      const projectItems = data.items.map(item => item.snippet)
      
      setProjects(projectItems);
    }
    fetchProjects();
  },[])
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {projects.map((project, projectTitle)=>(
            <Card key={projectTitle} project={project}/>
          ))}
        </div>
      </section>
    </main>
  )
}