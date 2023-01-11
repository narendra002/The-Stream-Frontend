import './App.scss'
import Navbar from './Component/Nav/Navbar'
import Home from "./Home/Home"
import Watch from "./Component/Watch/Watch"
import Movies from "./Component/Movies/Movies"
import Anime from "./Component/Anime/Anime"
import TvShows from "./Component/TvShows/TvShows"
import MovieMain from "./Component/Movies/MovieMain"

import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

 function App() {
  return (
    <Router>
       <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Watch/:watchId" element={<Watch/>}/>
		<Route path="/Movies" element={<Movies/>}/>
	  <Route path="/TvShows" element={<TvShows/>}/>
   	<Route path="/Anime" element={<Anime/>}/>
   	<Route path="/MovieMain" element={<MovieMain/>}/>

    </Routes>
 
    </Router>
  
  )
}
export default App;