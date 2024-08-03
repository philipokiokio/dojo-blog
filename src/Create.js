import { useState } from "react"

const Create = () =>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    


    const handleSubmit= (e) =>{
        e.preventDefault();
        const blog = {title, body,author};




    }











    return (



        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Blog title:

                </label>
                <input type="text" required value={title}
                onChange={(e)=>setTitle(e.target)}/>
                <label>
                    Blog body:

                </label>
                <textarea required
                 value={body}
                onChange={(e)=>setBody(e.target)}
                >
                </textarea>    
                <label>
                    Blog author:

                </label>
                <select
                 value={author}
                 onChange={(e)=>setAuthor(e.target)}

>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="luigi">luigi</option>


                </select>
                <button>Add Form</button>
            </form>
        </div>
    )
}



export default Create