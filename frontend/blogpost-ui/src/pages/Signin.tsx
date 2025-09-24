import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export function Signin(){
    return (
        <div className="lg:flex">
            <div className="lg:w-1/2 border-2 h-screen flex items-center justify-center">
                  <Auth type="signin" />
            </div>
            <div className="invisible lg:visible lg:w-1/2 ">
              <Quote/>
            </div>
        </div>
    )
}