

import { Link } from "react-router-dom";


const Navbar = () => {
    return ( <nav className="nav navbar">

    <h1>The Doho Blog</h1>

    <div className="links">
        <Link to="/" 
        // Inline styling
        // style={{
        //     color:"white",
        //     backgroundColor: "#f1356d"
        // }}
        >Home</Link>
        <Link to="/create">New Blog</Link>
    </div>


    </nav> );
}
 
export default Navbar;