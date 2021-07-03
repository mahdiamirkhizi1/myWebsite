import React from 'react'
import Mahdi from "../img/Mahdi.jpeg"
import {NavLink} from "react-router-dom"
function Navbar() {
    return (
        <div className="NavBar">
          
        <nav className="nav">
            <div className="profile">
                <img src={Mahdi} alt="عکس مهدی امیرخیزی" />
            </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blog
                         </NavLink>   
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                         </NavLink>   
                    </li>
                </ul>
            <footer className="footer">
                <p>
                    @2021 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error fugiat repellendus ab, ipsum, placeat enim sed ipsam quis accusantium vero aperiam laudantium perferendis eum. Ipsa incidunt perspiciatis similique minus.

                </p>
            </footer>
            </nav>
        </div>
    )
}

export default Navbar
