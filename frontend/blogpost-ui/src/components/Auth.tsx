import { LableInput } from "./LableInput"
import {Link} from "react-router-dom"

export function Auth({ type }: { type: "signin" | "signup" }) {
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

        }} />}

        <LableInput lable="Email" placeholder="me@example.com" type="email" onChange={(e) => {

        }} />

        <LableInput lable="Password" placeholder="" type="password" onChange={(e) => {

        }} />

        <button className="w-full bg-black text-white p-2 rounded-md mt-3">{type}</button>
      </div>
    </div>
  )
}