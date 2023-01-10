
// import React from 'react';
// import { Link } from 'react-router-dom';


// import { ImSearch } from "react-icons/im"
// import "./Navbar.scss"
// const Navbar = () => {
//   return (
    
     
      
//       <nav className='header'>
        
// <h className="finallogo">TheStream</h>




// <div className="line">
//           <ul>

//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/movies">Movies</Link></li>
//               <li><Link to="/tv_shows">Tv Show</Link></li>
//               <li><Link to="/anime">Anime</Link></li>
//               <li><Link to="/watch_list">Watch List</Link></li>


//           </ul>
// <div className="icon"><ImSearch />
//       </div>
// </div>
          

//       </nav>
//     )
// }
// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
// import { SearchIcon } from "react-icons/im";
// import  from '@mui/icons-material/Search';

import "./Navbar.scss"
const Navbar = () => {
  return (
    <nav className='header'>

      <h className="finallogo">The-Stream</h>

      <div className="line">
        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/Movies">Movies</Link></li>
          <li><Link to="/TvShows">Tv Show</Link></li>
          <li><Link to="/Anime">Anime</Link></li>
          <li><Link to="/watch_list">Watch List</Link></li>


        </ul>

      <div class='container' >
        <div class='search-container' >
          <input placeholder='search' type='text'>
             
          </input>
        </div>
      </div>

      </div>



    </nav>
  )
}
export default Navbar;
