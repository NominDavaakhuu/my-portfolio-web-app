import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {About} from "../pages/About/About";
import {Portfolio} from "../pages/Portfolio";
import {Resume} from "../pages/Resume/Resume";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}