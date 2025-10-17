export default function(){


    // try to use some reusale card component so that we can also use in the entire myProfile page , think once
    return <div className="border-2 h-screen px-6 ">
       <div className="font-bold text-2xl mt-8">My Profile</div>
       <div className="text-slate-800 mt-2">View your basic account details.</div>
       <div className="border-2 border-stone-500 rounded-2xl shadow-lg pl-4 py-4 mt-8">
            <div className="font-bold text-xl pb-8">
                Account Details
            </div>
            <div className="flex">
                <span className="w-1/2">
                    <div>Name</div>
                    <div>Abhinav</div>
                </span>
                <span>
                    <div>Email</div>
                    <div>abhi@gmail.com</div>
                </span>
            </div>
            <div className="mt-4">
                <div>Bio</div>
                <div>short bio of you broii</div>
            </div>
            <div className="mt-4">
                <div>Blogs Posted</div>
                <div>12</div>
            </div>
       </div>
    </div>
}