import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
                return (
                     <div className="navigation">
                         <div className="navigation__wrap">
                            <Link to="/about" >About me</Link>
                            <Link to="#" >Contacts</Link>
                            <Link to="#" >FAQ</Link>
                            <Link to="#" >Services</Link>
                            <Link to="#" >Blog</Link>
                            <Link to="/authorization" >Authorization</Link>
                         </div>
                     </div>
                    );
}

export default Nav;


