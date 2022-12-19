
import React from 'react';
import { Link } from 'react-router-dom';


import { ImSearch } from "react-icons/im"
import "./Navbar.scss"
const Navbar = () => {
  return (
    
     
      
      
      <nav className='header'>
        
 <h className="finallogo">theStream</h>




<div className="line">
          <ul>

              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/tv_shows">Tv Show</Link></li>
              <li><Link to="/anime">Anime</Link></li>
              <li><Link to="/watch_list">Watch List</Link></li>


          </ul>
<div className="icon"><ImSearch />
      </div>
</div>
          

      </nav>
    )
}
export default Navbar;


