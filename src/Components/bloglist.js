import React from "react";

function bloglist(props) {
    const blog = props.blog;
    return(
        <div className="blog">
        {blog.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
         <h2>{blog.title}</h2>
         <p>written by {blog.author}</p>
            </div>
           ))}
         </div>
    );
}
export default bloglist;