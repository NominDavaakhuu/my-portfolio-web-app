import { useTitle } from "../../hooks/useTitle";
import { toolsData } from "../../data/experience"
import Logo from '../../assets/logo.png';
import Background from "../About/Background";

const About = () => {
  useTitle("About")
  return (
     <section className="text-sky-500 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-7">
            <Background/>
            <div className='grid grid-cols-2 m-10'>
              <h1 className="font-extrabold tracking-tight dark:text-white text-gray-900 md:text-4xl lg:text-5xl my-10">I AM A MINIMALIST</h1>
              <img src={Logo} alt='log'/>
            </div>  
            <p className='text-justify m-10'>I'm excited to embark on a journey at the intersection of finance and technology, leveraging my background in finance to dive into the dynamic world of IT. As a newcomer to the industry, I bring a fresh perspective and a hunger for learning.My goal is to seamlessly blend my finance expertise with the latest in technology, offering a unique skill set that bridges traditional financial practices with cutting-edge IT solutions. I thrive on challenges and am committed to delivering my best work, no matter the task at hand. Through this portfolio, I invite you to explore my projects, witness my growth, and join me on this exhilarating journey as I embrace new technologies, tackle complex problems, and strive for excellence in everything I do.</p>
            <h3 className="title-font dark:text-white text-gray-900 font-semibold text-center m-10">Here are a few tools & technologies I’ve been working with:</h3>
            <div className="columns-2 p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10 ">
            {toolsData.map((tool)=>( 
              <li key={tool} >{tool}</li>
            ))}
            </div>
        </div>
     </section>
  );
};
export default About;
