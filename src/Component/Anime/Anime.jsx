import React from 'react'
import './Anime.scss'
import Row from "../Row/Row.jsx"
import logo from "../Nav/svg/logo-color.svg"
import {AnimeApi,BannerApi}  from '../AxiosApi'
import Banner from"../Banner/Banner.jsx"
const Anime = () => {
    const Popular =AnimeApi();
    const upcoming =BannerApi("popular");
    console.log(Popular);
    return (
        <section className="anime">
       
        <Banner />
         
        <Row title={"Anime"} arr={Popular}/>
          
       </section>
    )
}

export default Anime;
