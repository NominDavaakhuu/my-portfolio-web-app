import { useTitle } from "../../hooks/useTitle";
import ToolsAbout from "./ToolsAbout";
const About = () => {
  useTitle("About")
  return (
    <>
     <section className=" text-sky-500 shadow-inner bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-7 ">
          <h1 className="m-10 text-4xl font-extrabold tracking-tight leading-none dark:text-white text-gray-900 md:text-4xl lg:text-5xl">ABOUT ME</h1>
          <div className='m-10'>
            I'm excited to embark on a journey at the intersection of finance and technology, leveraging my background in finance to dive into the dynamic world of IT. As a newcomer to the industry, I bring a fresh perspective and a hunger for learning.
            My goal is to seamlessly blend my finance expertise with the latest in technology, offering a unique skill set that bridges traditional financial practices with cutting-edge IT solutions. I thrive on challenges and am committed to delivering my best work, no matter the task at hand.   
            Through this portfolio, I invite you to explore my projects, witness my growth, and join me on this exhilarating journey as I embrace new technologies, tackle complex problems, and strive for excellence in everything I do.
          </div>
          <ToolsAbout/>
       </div>
    </section>
    </>
  );
};
export default About;
