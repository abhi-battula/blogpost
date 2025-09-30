import { Navbar } from "./Navbar";

export function BlogSkeleton(){
    return(
        <div>
              <Navbar />
              <div className="mx-4 lg:mx-28 md:mx-14 flex">
                <div className=" w-2/3">
                  <div className="bg-gray-200 rounded-md h-8 w-full"></div>
                  <div className="bg-gray-200 rounded-md mt-1 h-3 w-40"></div>
                  <div className="mt-4 bg-gray-200 rounded-md h-2 w-full"></div>
                  <div className="mt-2 bg-gray-200 rounded-md h-2 w-full"></div>
                  <div className="mt-2 bg-gray-200 rounded-md h-2 w-full"></div>
                  <div className="mt-2 bg-gray-200 rounded-md h-2 w-full"></div>
                  <div className="mt-2 bg-gray-200 rounded-md h-2 w-full"></div>
                  <div className="mt-2 bg-gray-200 rounded-md h-2 w-full"></div>
                  <div className="mt-2 bg-gray-200 rounded-md h-2 w-full"></div>
                </div>
                <div className=" w-1/3 pl-4">
                  <div className="bg-gray-200 rounded-md mt-1 h-5 w-20"></div>
                  <div className="flex mt-2  items-center">
                    <span className={`border-2 bg-gray-200 p-2 w-8 h-8 rounded-full flex items-center justify-center mr-2`}></span>
                    <div>
                      <div className="bg-gray-200 rounded-md h-4 w-20"></div>
                      <div className="bg-gray-200 rounded-md mt-1 h-4 w-32"></div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
    )
}