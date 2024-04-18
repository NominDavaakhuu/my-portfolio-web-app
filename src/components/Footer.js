import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Nomin-Erdene</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap gap-5 mt-3 text-sm sm:mt-0">
              <li>
                  <a href="https://www.linkedin.com/in/nomin-erdene-davaakhuu/" target="_blank" rel="noreferrer" className=" mr-4 hover:underline md:mr-6 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  LinkedIn</a>
              </li>
              <li>
                  <a href="https://www.youtube.com/channel/UCWg4JJ8Hgsqry0IwKbWfLxQ" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  YouTube</a>
              </li>
              <li>
                  <a href="https://github.com/NominDavaakhuu" target="_blank" rel="noreferrer" className="hover:underline md:mr-6 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  GitHub</a>   
              </li>
          </ul>
      </footer>
  )
}
