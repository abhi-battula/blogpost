import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

type Blogtype = {
  "title": string,
  "content": string,
  "id": string,
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