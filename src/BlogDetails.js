import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();

 
    const {data:blog,isPending,error}= useFetch(`http://localhost:2422/blogs/${id}`)



    return ( <div className="blog-details">
    {error && <div> {error} </div>}
    {isPending && <div>Loading ... </div>}
    { blog && (
        <article>

        <h2>{blog.title}</h2>
        <p>Writen by: {blog.author}</p>        
            <div>
            {blog.body}
                </div>
           
        </article>



        )}



    </div> );
}
 
export default BlogDetails;