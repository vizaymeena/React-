// Link Component coming through react-router-dom
import { Link } from "react-router-dom"


function Navbar(){

    return(
        <>
        <div className="div">
            <h1 className="h1">Navbar</h1>
            <ul className="ul">
                <li className="li"><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
                <li className="li"><Link style={{textDecoration:"none"}} to="About">About</Link></li>
                <li className="li"><Link style={{textDecoration:"none"}} to="Services">Services</Link></li>
            </ul>
        </div>
         
        </>
    )
}
export {Navbar}