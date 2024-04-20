import React from 'react'
const inputStyle="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const Contact= () => {
  return (
    <div className="max-w-7xl mx-auto py-7">
        <h1 className="title-font uppercase dark:text-white text-gray-900 font-semibold text-center m-10">If you are interested to hire me I am always open to new opportunities 
            and interesting projects! Feel free to contact me if you have any other 
            requests.</h1>
            <form>
                <div className="grid gap-6 mb-10 md:grid-cols-2">
                     <div>
                        <input type="text" id="name" className={inputStyle} placeholder="Name" required autoComplete='name' />
                    </div>
                    <div>
                        <input type="email" id="email" className={inputStyle} placeholder="yourmail@company.com" required autoComplete='email'/>
                    </div>   
                </div>
                <div className="mb-6">
                    <input type="text" id="default-input" className={inputStyle} placeholder="hi" autoComplete='anything'/>
                </div>
                <button type="submit" className="mb-6 inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">Send</button>
            </form>
    </div>  
  );
};
export default Contact;

