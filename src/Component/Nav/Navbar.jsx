import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [drawerPos, setDrawerPos] = useState('half');

  const handleDrawer = () => {
    setDrawerPos((prevDrawerPos) => (prevDrawerPos === 'half' ? 'full' : 'half'));
  };

  const menuItems = [
    {
      iconSrc: "https://img.icons8.com/ios-glyphs/30/search.png",
      text: "Search",
      link: "/search",
    },
    {
      iconSrc: "https://img.icons8.com/fluency-systems-filled/48/home.png",
      text: "Home",
      link: "/",
    },
    {
      iconSrc: "https://img.icons8.com/material-rounded/24/film-reel.png",
      text: "Movies",
      link: "/movies",
    },
    {
      iconSrc: "https://img.icons8.com/fluency-systems-filled/48/tv.png",
      text: "TV Shows",
      link: "/TvShows",
    },
    {
      iconSrc: "https://img.icons8.com/ios-glyphs/30/anime.png",
      text: "Anime",
      link: "/anime",
    },
  ];

  return (
    <aside
      className={`fixed h-full overflow-y-auto z-20 ${
        drawerPos === 'half' ? 'w-20' : drawerPos === 'full' ? 'w-64' : 'w-0'
      } bg-black rounded-r-lg transition-all ease-in-out duration-300`}
    >
      <div className="pt-10 px-4 pb-10 flex items-center">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/ios-glyphs/30/menu.png"
          alt="menu"
          onClick={handleDrawer}
          style={{ filter: 'brightness(0) invert(1)' }}
          className={`cursor-pointer hover:text-green-800 hover:scale-110 transition-transform ${
            drawerPos === 'half' ? 'ml-2' : ''
          }`}
        />
        <Link
          to="/"
          className={`text-white ${drawerPos === 'half' ? 'ml-8' : drawerPos === 'full' ? 'ml-2' : ''} font-bold text-lg`}
        >
          The Stream
        </Link>
      </div>
      <ul className="flex-col p-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-white px-4 py-4 hover:transform hover:translate-x-5 hover:text-blue-500 hover:border-l-2 hover:border-blue-500 cursor-pointer transition-all duration-300 ease-in-out"
          >
            <img
              width="24"
              height="24"
              src={item.iconSrc}
              alt={item.text}
              style={{ filter: 'brightness(0) invert(1)' }}
              className={` ${drawerPos === 'half' ? 'ml-2' : ''}`}
            />
            <Link
              to={item.link}
              className={`text-white ${drawerPos === 'half' ? 'ml-7' : drawerPos === 'full' ? 'ml-2' : ''} font-bold`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
