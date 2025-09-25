export const Navbar = () => {
    return(
        <div className="flex border-2 p-2 px-4 mb-4 justify-between items-center">
            <div>
                BLOG-POST
            </div>
            <div className="flex items-center">
                <span>write</span>
                <span className={`border-2 text-black ml-2 p-2 w-8 h-8 rounded-full flex items-center justify-center`}>A</span>
            </div>
        </div>
    )
}