import { Link } from "react-router-dom"
import writeIcon from "../assets/write.svg"
import myAccount from "../assets/my-profile.svg"
import ProfileLayout from "../pages/ProfileLayout"

export const Navbar = () => {
    return(
        <div className="flex border-b border-gray-200 p-2 px-4 justify-between items-center bg-white shadow-sm">
            <Link to={"/blogs"}><div className="text-emerald-900 font-bold"> BLOG-POST</div></Link>
            <div className="flex items-center">
                <Link className="flex justify-center  rounded-full px-2 p-1 bg-emerald-400 hover:bg-emerald-600 " to={"/blog/publish"}>
                     <img className="w-6 h-6 mr-1" src={writeIcon} alt="" /> 
                     <span>write</span>  
                </Link>
                <Link to={"/profile/myprofile"}>
                    <img className="h-8 w-8  bg-emerald-100 rounded-full ml-2 cursor-pointer" src={myAccount} alt="" />
                </Link>
            </div>
        </div>
    )
}