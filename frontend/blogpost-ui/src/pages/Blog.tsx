import { useParams } from "react-router-dom"
import { useBlogId } from "../hooks/BlogHooks"

export const Blog = ()=>{
    const {id} = useParams()
    if(!id) return;
    const {blog,loading} = useBlogId({id});
    console.log("id-------------_>",id);
    console.log("body-------------_>",blog)

    if(!loading) return <div>loading</div>
    
    return <div>{blog?.content}</div>
}