import { Link } from "react-router-dom"
import writeIcon from "../assets/write.svg"

export const Navbar = () => {
    return(
        <div className="flex border-b border-gray-200 p-2 px-4 mb-4 justify-between items-center bg-white shadow-sm">
            <Link to={"/blogs"}><div className="text-gray-900 font-semibold"> BLOG-POST</div></Link>
            <div className="flex items-center">
                <Link className="flex justify-center  rounded-full px-2 p-1 bg-emerald-500 hover:bg-emerald-600 " to={"/blog/publish"}>
                     <img className="w-6 h-6 mr-1" src={writeIcon} alt="" /> 
                     <span>write</span>  
                </Link>
                <span className={`border-2 text-black ml-2 p-2 w-8 h-8 rounded-full flex items-center justify-center`}>A</span>
            </div>
        </div>
    )
}