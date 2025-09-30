import { useState } from "react"
import { LableInput } from "./LableInput"
import {Link , useNavigate} from "react-router-dom"
import type { SignupType, SigninType } from "blog-types-common"
import axios from "axios"

export function Auth({ type }: { type: "signin" | "signup" }) {

  const[signupInput,setSignupInput] = useState<SignupType>({
    name:"",
    email:"",
    password:""
  })

  const[signinInput,setSigninInput] = useState<SigninType>({
    email:"",
    password:""
  })

  const navigate =useNavigate()

  async function sendRequest(){
    console.log("from send request method");
    console.log("signup--------->",signupInput);
    console.log("signin------->",signinInput);
    const apiUrl = `https://backend.abhinavbattula01.workers.dev/api/v1/user/${type}`;
    try{
      const response = await axios.post(apiUrl,type==="signup" ? signupInput : signinInput);
      console.log("signupResponse--------->",response);
      const token = response.data.token;
      localStorage.setItem('token',token);
      navigate("/blogs")
    }catch(e){
      console.log("errormsg from catch block ",e);
      
      // show some component/popup/snackbar to the user that failed login
    }
    
    
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" shadow shadow-slate-350  p-4">
        <div className="text-3xl font-bold text-center whitespace-nowrap">
          { type == "signup" ? "Create an account" : "Login to your account" }
        </div>
        <div className="text-md text-center text-gray-800">
         { type == "signup" ? "Already have an account?" : "Don't have an account?"  } <Link className="underline" to={type=="signup"? "/signin" : "/signup"}>{type == "signup" ? "Login" : "Register"}</Link>
        </div> 
        
        {type==="signup" && <LableInput lable="Username" placeholder="Enter your name" type="text" onChange={(e) => {
          if(type==="signup")
          setSignupInput({...signupInput,name:e.target.value})

        }} />}

        <LableInput lable="Email" placeholder="me@example.com" type="email" onChange={(e) => {
          if(type==="signup")
            setSignupInput({ ...signupInput , email:e.target.value })
          else
            setSigninInput({...signinInput , email:e.target.value })
        }} />

        <LableInput lable="Password" placeholder="" type="password" onChange={(e) => {
          if(type==="signup")
            setSignupInput({...signupInput,password:e.target.value})
          else 
            setSigninInput({...signinInput,password:e.target.value})
        }} />

        <button onClick={sendRequest} className="w-full bg-black text-white p-2 rounded-md mt-3">{type}</button>
      </div>
    </div>
  )
}