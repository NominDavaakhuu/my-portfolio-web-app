import { useTitle } from "../hooks/useTitle";
import {NavLink } from "react-router-dom"; 
export const Home = () => {
    useTitle("Home");
    return (
        <>
            <section className="bg-center bg-no-repeat  bg-gradient-to-r from-cyan-500 to-blue-500 ... bg-blend-multiply" >
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Hi, I am Nomin. <br/>Software developer.(to be)</h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Software engineering student located in Brisbane, Australia.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <NavLink to="/resume" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-sky-500 rounded-lg bg-white hover:bg-sky-800 focus:ring-4 ">
                            See resume
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </NavLink>
                            <NavLink to="/portfolio" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Email me!
                            </NavLink>  
                        </div>
                </div>
            </section>

        </>
    );
}