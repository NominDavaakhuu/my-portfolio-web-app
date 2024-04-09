import { toolsData } from "../../data/experience"

const Tools = () => {
  return (
    <section className="text-center border-b">
        <h2 className={"mb-8 text-lg text-center font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 uppercase pt-6 "}>Skills</h2>
        {toolsData.map((info,index)=>(  
            <section key={index}>
                <h3 className="text-sky-400/100 font-semibold ">{info}</h3>
            </section>
        ))}
    </section>
  );
};
export default Tools;
