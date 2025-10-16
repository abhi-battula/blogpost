export default function(){


    // try to use some reusale card component so that we can also use in the entire myProfile page , think once
    return <div className="border-2 h-screen bg-green-50 px-6 ">
       <div>My Profile</div>
       <div>View your basic account details.</div>
       <div className="border-2">
            <div>
                Account Details
            </div>
            <div className="flex">
                <span>
                    <div>Name</div>
                    <div>Abhinav</div>
                </span>
                <span>
                    <div>Email</div>
                    <div>abhi@gmail.com</div>
                </span>
            </div>
            <div>
                <div>Bio</div>
                <div>short bio of you broii</div>
            </div>
            <div>
                <div>Blogs Posted</div>
                <div>12</div>
            </div>
       </div>
    </div>
}