// In this we see how we use array as state in useState

import {useState} from 'react';
import './style.css';
const Blogs=()=>{
    const [blog,setBlog]=useState({ id:'',title:'',body:'',author:''})
    const [blogs,setBlogs]=useState([]);
    const handleChange=(e)=>{
        setBlog({
            ...blog,
            [e.target.name]:e.target.value,
            id:new Date().getTime()
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setBlogs([
            ...blogs,
            blog
        ]); 
        setBlog({title:'',body:'',author:''});
       
    }
    const showBlogs=blogs.length ? blogs.map(blog=>{
                        return (
                            <div key={blog.id} className="card">
                                <p>{blog.title}</p>
                                <p>{blog.body}</p>
                                <p>{blog.author}</p>
                            </div>
                        )
                    }):<p>Please add blog</p>;
    return (
        <div className="blogs-container">
        <div className="blog-col1">
            <form onSubmit={handleSubmit}>
                 <div>
                     <div>
                         <label>Title</label>
                         <input name='title' value={blog.title} onChange={handleChange} />
                     </div>
                     <div>
                         <label>Body</label>
                         <input name='body' value={blog.body} onChange={handleChange} />
                     </div>
                     <div>
                         <label>Author</label>
                         <input name='author' value={blog.author} onChange={handleChange} />
                     </div>
                     <div>
                         <button type="submit">Add Todo</button>
                     </div>
                 </div>
            </form>
        </div>
        <div className="blogs blog-col2">
            <h2>Blogs</h2>
            {showBlogs}
        </div>  
        </div>
    )
}

export default Blogs;