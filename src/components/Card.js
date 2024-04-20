import { Link } from "react-router-dom";
export const Card = ({project}) => {
const {title,description,thumbnails,resourceId}=project;
const image = thumbnails.maxres.url;
const videoId = resourceId.videoId;
const link = (`https://www.youtube.com/watch?v=${videoId}`);

const handleLink = () => {
  if (link) {
    window.open(link, "_blank");
  }
};
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to= {`/project/${title}`} target="_blank" rel="noopener noreferrer">
            <img className="rounded-t-lg" src={image} alt="thumbnail"/>
        </Link>
        <div className="p-5">
            <Link to= {`/project/${title}`}  target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <button onClick={handleLink} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Open in Youtube
            </span>
            </button>
        </div>
    </div>
  )
}