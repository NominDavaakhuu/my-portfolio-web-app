import { Button } from "./Button";
export const CardDetailed = ({project}) => {
const {title,description,thumbnails,resourceId,publishedAt,videoOwnerChannelTitle}=project;
const image = thumbnails.maxres.url;
const videoId = resourceId.videoId;
const kind= resourceId.kind;
const link = (`https://www.youtube.com/watch?v=${videoId}`);

const handleLink = () => {
  if (link) {
    window.open(link, "_blank");
  }
};
  return (
    <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
        <img className="rounded-t-lg" src={image} alt="thumbnail"/>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}<br/>{publishedAt}<br/>{kind}<br/>{videoOwnerChannelTitle}</p>
            <Button onClick={handleLink}>Open in Youtube</Button>
        </div>
    </div>
  )
}