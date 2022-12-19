import './App.scss'
import Navbar from './Component/Nav/Navbar'
import Home from "./Home/Home"
import Watch from "./Component/Watch/Watch"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

 function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Watch" element={<Watch/>}/>
    </Routes>
 
    </Router>
  
  )
}
export default App;