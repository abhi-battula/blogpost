import { useNavigate, useParams } from "react-router-dom"
import { useBlogId } from "../hooks/BlogHooks"
import { Navbar } from "../components/Navbar";


export const Blog = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  if (!id) {
    navigate("/blogs")
    return;
  };

  const { blog, loading } = useBlogId({ id });
  console.log("id-------------_>", id);
  console.log("body-------------_>", blog)

  if (!loading) return <div>loading</div>
  if(!blog){
    navigate("/blogs")
    return;
  }
  return (
    <div>
      <Navbar />
      <div className="mx-4 lg:mx-28 md:mx-14 flex">
        <div className=" w-2/3">
          <div className="text-4xl font-bold">{blog?.title}</div>
          <div className="text-sm pt-1">post on 2nd December 2023</div>
          <div className="mt-4 text-lg">{blog?.content}</div>
        </div>
        <div className=" w-1/3 pl-4">
          <div>Author</div>
          <div className="flex mt-2  items-center">
            <span className={`border-2 bg-slate-600  text-white p-2 w-8 h-8 rounded-full flex items-center justify-center mr-2`}>{blog?.author?.name.charAt(0).toUpperCase()}</span>
            <div>
              <div>{blog.author.name}</div>
              <div className="text-sm pt-1">Just a poet lost in the algorithm.</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}