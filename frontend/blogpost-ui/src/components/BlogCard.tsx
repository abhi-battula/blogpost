import { useNavigate } from "react-router-dom";

type BlogCardProps = {
  authorName: string,
  title: string,
  description: string,
  publishDate: string,
  id?:string
}

export const BlogCard = ({ authorName, title, description, publishDate , id }: BlogCardProps) => {

  const colors = [
    "bg-pink-400 border-pink-400",
    "bg-blue-400 border-blue-400",
    "bg-green-400 border-green-400",
    "bg-yellow-400 border-yellow-400",
    "bg-purple-400 border-purple-400",
    "bg-red-400 border-red-400",
    "bg-indigo-400 border-indigo-400",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const navigate = useNavigate();

  function navigateToBlog(){
    navigate(`/blog/${id}`)
  }

  return <div className="cursor-pointer hover:shadow-xl transition" onClick={navigateToBlog}>
    {/* {authorName},{title},{description},{publishDate} */}
    <div className="flex items-center">
      <span className={`border-2 ${randomColor} text-white p-2 w-8 h-8 rounded-full flex items-center justify-center`}>{authorName.charAt(0).toUpperCase()}</span>
      <span className="pl-3">{authorName}</span>
      <span className="pl-3">dec 3 , 2020</span>
    </div>
    <div className="text-xl font-bold pt-3">{title}</div>
    <p className="line-clamp-3 pt-3 leading-5">{description}</p>
    <hr className="my-8 border-t-2" />
  </div>
}