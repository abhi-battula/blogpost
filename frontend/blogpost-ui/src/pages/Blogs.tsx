import { BlogCard } from "../components/BlogCard"
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { Navbar } from "../components/Navbar"
import { useBlog } from "../hooks/BlogHooks"
export function Blogs() {
  const { loading, blogs } = useBlog()
  console.log(loading);


  if (!loading) {
    return (
      <div>
        <Navbar />
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
      </div>
    )
  }

  return (
    <div className="bg-stone-50">
      <Navbar />
      <div className="mx-4 lg:mx-28 md:mx-14 ">
        <BlogCard authorName="abhinav" description="11--Ah, you're asking about text truncation—showing an ellipsis (...) after a few words or when the text overflows. While JavaScript has the spread (...) operator, in HTML/CSS (and Tailwind), ellipsis behavior is controlled by CSS properties, not the spread operator.----2---Ah, you're asking about text truncation—showing an ellipsis (...) after a few words or when the text overflows. While JavaScript has the spread (...) operator, in HTML/CSS (and Tailwind), ellipsis behavior is controlled by CSS properties, not the spread operator.----3--- Ah, you're asking about text truncation—showing an ellipsis (...) after a few words or when the text overflows. While JavaScript has the spread (...) operator, in HTML/CSS (and Tailwind), ellipsis behavior is controlled by CSS properties, not the spread operator." title="IMP update Use utilities like leading-6 and leading-7 to give an element a fixed line-height, irrespective of the current font-size. These are useful when you need very precise control over an element’s final size." publishDate="dec 3 , 2002" id="08e1d5c3-ed78-428a-b82b-36c4e3e35195" />
        {/* <BlogCard authorName="abhinav" description="11--Ah, you're asking about text truncation—showing an ellipsis (...) after a few words or when the text overflows. While JavaScript has the spread (...) operator, in HTML/CSS (and Tailwind), ellipsis behavior is controlled by CSS properties, not the spread operator.----2---Ah, you're asking about text truncation—showing an ellipsis (...) after a few words or when the text overflows. While JavaScript has the spread (...) operator, in HTML/CSS (and Tailwind), ellipsis behavior is controlled by CSS properties, not the spread operator.----3--- Ah, you're asking about text truncation—showing an ellipsis (...) after a few words or when the text overflows. While JavaScript has the spread (...) operator, in HTML/CSS (and Tailwind), ellipsis behavior is controlled by CSS properties, not the spread operator." title="IMP update Use utilities like leading-6 and leading-7 to give an element a fixed line-height, irrespective of the current font-size. These are useful when you need very precise control over an element’s final size." publishDate="dec 3 , 2002"/> */}
        {blogs.map(blog => (
          <BlogCard authorName={blog.author.name} description={blog.content} title={blog.title} publishDate={blog.author.name} id={blog.id} />
        ))}
      </div>

    </div>
  )
}