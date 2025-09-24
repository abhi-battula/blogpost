import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export function Signup(){
    return(
        <div className="lg:flex">
            <div className="lg:w-1/2 border-2 h-screen flex items-center justify-center">
                  <Auth type="signup" />
            </div>
            <div className="invisible lg:visible lg:w-1/2 ">
              <Quote/>
            </div>
        </div>
    )
}

//  default Signup;