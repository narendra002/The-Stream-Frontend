import React from 'react'
import './Home.scss'
import logo from "../Component/Nav/svg/logo-color.svg"
const Card =({img})=>(
  <img className="card"
    src={img}
    alt="cover"
    />
)
const Row =({title})=>(

  <div className="row">
  <h2>{title}</h2>
    <div>
    <Card  img ={logo}/>
    <Card  img ={logo}/>
    <Card  img ={logo}/>
    <Card  img ={logo}/>
    </div>
  </div>
)
const Home = () => {
    return (
       <section className="home">
       <div className="banner" >
       
       </div>
        
          <Row title={"Popular on Pixel"}/>
          <Row title={"Movies"}/>
          <Row title={"Tv Shows"}/>
         <Row title={"Watch List"}/>
       </section>
    )
}

export default Home
