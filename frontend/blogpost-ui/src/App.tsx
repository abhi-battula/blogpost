import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'
import  ProfileLayout  from './pages/ProfileLayout'
import MyProfile from './pages/MyProfile'
import MyBlogs from './pages/MyBlogs'
import ChangeCredentials from './pages/ChangeCredentials'
import Contact from './pages/Support'

function App() {

  return (
    // things to work
    //  add skeletons
    // add spinner while login , register , post blog
    // caching request data in blogs
    // logout option
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/' element={<Blogs/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/blog/publish' element={<Publish/>} />
        <Route path='/profile' element={<ProfileLayout/>}>
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="myBlogs" element={<MyBlogs />} />
          <Route path="changeCredentials" element={<ChangeCredentials />} />
          <Route path="support" element={<Contact />} />
          {/* <Route path="logout" element={<Logout />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
