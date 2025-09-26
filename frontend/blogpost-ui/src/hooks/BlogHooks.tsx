import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

type Blogtype = {
  "title": string,
  "content": string,
  "id"?: string,
  "author": {
    "name": string
  }
}
export const useBlog = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get("https://backend.abhinavbattula01.workers.dev/api/v1/blog/bulk", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log("resonse-------->", response);
        setLoading(true);
        setBlogs(response.data.data)
      }
      )
    } else {
      navigate("/signin")
    }

  }, [])
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blogtype[]>([]);
  return {
    loading,
    blogs
  }
}

export const useBlogId = ({id}:{id:string})=>{
  const[loading,setLoading] = useState(false);
  const [blog, setBlog] = useState<Blogtype | null>(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const api = `https://backend.abhinavbattula01.workers.dev/api/v1/blog/${id}`
    const token = localStorage.getItem('token')
    if(!token) navigate("/signin")
    const response = axios.get(api,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res =>{
      setLoading(true)
      setBlog(res.data.data)
      console.log(":id res----->",res);
    })
  },[])
  return {loading,blog}
}