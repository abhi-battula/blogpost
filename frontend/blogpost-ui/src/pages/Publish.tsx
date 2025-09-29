import { useState } from "react";
import { Navbar } from "../components/Navbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const navigate = useNavigate()
  const[title,setTitle] = useState("");
  const[description,setDescription] = useState("");
  const token = localStorage.getItem('token')
  if(!token) navigate("/signin")
  const postBlog =async () =>{
    const res = await axios.post("https://backend.abhinavbattula01.workers.dev/api/v1/blog",{
      title,
      content:description
    },{
       headers:{
        authorization: `Bearer ${token}`
      }
    })
    console.log("post blog res",res);
    navigate("/blogs")
  }
  return <div className="bg-stone-50 h-screen">
    <Navbar />
    <div className=" mx-4 lg:mx-48 md:mx-24 flex flex-col ">
      <input onChange={(e)=>{
        setTitle(e.target.value)
      }} className="border-2 border-black w-full p-1 mb-2 rounded-s" type="text" placeholder="Title" />
      
      <textarea onChange={(e)=>{
        setDescription(e.target.value)
      }} className="p-1 border-2 border-black rounded-s" rows={8} name="" id="" placeholder="description"></textarea>
      
      <button onClick={postBlog} className="p-2 mt-2 border-2 bg-blue-500 text-white w-36 rounded-lg">Publish Post</button>
    </div>
  </div>
}