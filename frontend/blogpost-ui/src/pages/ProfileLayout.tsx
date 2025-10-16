import { Link, Outlet} from "react-router-dom"
import profile from "../assets/profile.svg"
import Logout from "../assets/logout.svg"
import Key from "../assets/key.svg"
import Support from "../assets/support.svg"
import { Navbar } from "../components/Navbar"
export default function ProfileLayout(){
    
    return <div>
        <Navbar/>
        <div className="flex">
            <div className=" w-1/4 h-screen	bg-gray-50	">
                <div className="ml-4 mt-8 font-bold text-slate-800 text-xl">Profile</div>


                <Link to="/profile/myprofile">
                    <div className="flex ml-4 pl-6 py-1 mt-8 rounded-lg hover:bg-gray-200 active:bg-gray-200 cursor-pointer items-center ">
                    <div><img className="w-6 h-6 mr-4" src={profile} alt="" /></div>
                    <div className="">My Profile</div>
                </div>
                </Link>
                
                <Link to={"/profile/changeCredentials"}>
                    <div className="flex  ml-4 pl-6 py-1 mt-4 rounded-lg hover:bg-gray-200 active:bg-gray-200 cursor-pointer items-center ">
                    <div><img className="w-6 h-6 mr-4" src={Key} alt="" /></div>
                    <div>Change Credentials</div>
                </div>
                </Link>
                
                <Link to="/profile/support">
                    <div className="flex  ml-4 pl-6 py-1 mt-4 rounded-lg hover:bg-gray-200 active:bg-gray-200 cursor-pointer items-center active:bg-gray-100 ">
                    <div><img className="w-6 h-6 mr-4" src={Support} alt="" /></div>
                    <div>Support</div>
                </div>
                </Link>
                <div className="flex  ml-4 pl-6 py-1 mt-4 rounded-lg hover:bg-gray-200 active:bg-gray-200 cursor-pointer items-center">
                    <div><img className="w-6 h-6 mr-4" src={Logout} alt="" /></div>
                    <div>Logout</div>
                </div>
            </div>


            <div className="border-2 w-3/4 h-screen">
                <Outlet/>
            </div>
        </div>
    </div>
}