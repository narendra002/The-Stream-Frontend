import React, { useState, useEffect, useRef } from 'react';
import './Row.scss';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Row = ({ title, arr = [] }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);
  const rowRef = useRef(null);

  const handleScroll = () => {
    const element = rowRef.current;
    const { scrollTop, clientHeight, scrollHeight } = element;
    const atBottom = scrollTop + clientHeight === scrollHeight;

    if (atBottom && end < arr.length) {
      const newStart = start + 5;
      const newEnd = end + 5 > arr.length ? arr.length : end + 5;
      setStart(newStart);
      setEnd(newEnd);
    }
  };
  
  useEffect(() => {
    const element = rowRef.current;
    element.addEventListener('scroll', handleScroll);
  
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const Card = ({ poster }) => (
    <div className='maincard'>
      <img className='card' src={poster} alt='cover' />
    </div>
  );

  const handlePrev = () => {
    if (start > 0) {
      setStart((s) => s - 10);
      setEnd((e) => e - 10);
      rowRef.current.scrollTo({
        behavior: 'smooth',
        left: rowRef.current.scrollLeft - rowRef.current.offsetWidth,
      });
    }
  };

  const handleNext = () => {
    if (end < arr.length) {
      setStart((s) => s + 10);
      setEnd((e) => e + 10);
      rowRef.current.scrollTo({
        behavior: 'smooth',
        left: rowRef.current.scrollLeft + rowRef.current.offsetWidth,
      });
    }
  };

  return (
    <div className='row' ref={rowRef}>
      <h2>{title}</h2>

      <div>
        <button className='arrow-button' onClick={handlePrev}>
          <AiOutlineArrowLeft />
        </button>
        {arr.slice(start, end).map((item) => (
          <Link to={'/MovieMain/'} state={{ tvShow: item }}>
            <Card key={item._id} poster={item.poster_path} />
          </Link>
        ))}
        <button className='arrow-button' onClick={handleNext}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Row;
