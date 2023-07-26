import React from "react";

function Header() {
  return (
    
    <nav className="na"> 
            <div className='logo'>Store99.</div>
            <ul className="a">
                <li className="b">Home</li>
                <li className="b">Products</li>
                <li className="b">About us</li>
                <li className="b">Contact</li>
            </ul>
            <div className='search'>
                <i className='fa fa-search'></i>
                <i className="fa fa-shopping-basket"></i>
                
            </div>
        </nav>
  );
}

export default Header;
