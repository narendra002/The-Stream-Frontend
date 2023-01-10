import React from 'react'
import './Anime.scss'
import Row from "../Row/Row.jsx"
import logo from "../Nav/svg/logo-color.svg"
const Card =({img})=>(
  <img className="card"
    src={img}
    alt="cover"
    />
)

const Anime = () => {

    return (
        <section className="anime">
       <div className="searchAnime">
               
        </div>
            
         
           <Row title={"Anime"} />
          
       </section>
    )
}

export default Anime;
