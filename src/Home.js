import React, { useEffect, useState } from 'react';

function Home() {
  const [blog, setblog] = useState([
    { title: 'Ramayan', body: 'lorem....',author: 'Valmiki', id: 1},
    { title: 'RamcharitraManas', body: 'lorem....',author: 'Tulshidas', id: 2},
    { title: 'BhagvatGita', body: 'lorem....',author: 'Vedvyas', id: 3}
  ]);
 const handledelete = (id) => {
  const newblog = blog.filter(blog => blog.id !== id);
  setblog(newblog);
 }
 useEffect(() =>{
  console.log("something happening....");
  console.log(blog);
 })


  return (
   <div className="home">

  {blog.map((blog) =>(
   <div className="blog-preview" key={blog.id}>
<h2>{blog.title}</h2>
<p>written by {blog.author}</p>

<button onClick={() => handledelete(blog.id)}>DeletBlog</button>
   </div>
  ))}

   </div>
  )
}
export default Home;