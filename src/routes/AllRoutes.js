import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume/Resume";
import NotFoundPage  from "../pages/NotFoundPage";
import ProjectDetail from "../pages/ProjectDetail";
import Search from "../pages/Search";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}  />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio apiPath="playlistItems?part=snippet&playlistId=UUWg4JJ8Hgsqry0IwKbWfLxQ&key"/>} />
        <Route path="/project/:title" element={<ProjectDetail/>}/>
        <Route path="search" element={<Search/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}