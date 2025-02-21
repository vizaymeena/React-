import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./App.css"


function Layout(){
    return  (
        <>
{/* Header */}
        <nav>
        <div className="div">
            <h1 className="h1">Navbar</h1>
            <ul className="ul">
                <li className="li"><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
                <li className="li"><Link style={{textDecoration:"none"}} to="About">About</Link></li>
                <li className="li"><Link style={{textDecoration:"none"}} to="Services">Services</Link></li>
            </ul>
        </div>
        </nav>

{/* Outlet */}
        
           <div>
            {/* Used to Render child Elements */}
            <Outlet/>
           </div>


{/* Footer */}
         <footer className="footer">
         <div className="fhead">Footer</div>
        <div className="fdiv">
              <ul>
                  <li>  Privacy Policy   </li>
                  <li>  Help             </li>
                  <li>  Contact          </li>
                  <li>  Customer Support </li>
              </ul>

        </div>
         </footer>
        
        </>
)}


export {Layout}