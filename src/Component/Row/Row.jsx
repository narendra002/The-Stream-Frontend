import React, { useState, useEffect, useRef } from 'react';
import './Row.scss';
import { Link } from 'react-router-dom';
import {  AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FixedSizeList } from 'react-window';

const Card = ({ poster }) => (
  <div className='maincard'>
    <img className='card' src={poster} alt='cover' />
  </div>
);

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
      const newEnd = Math.min(end + 5, arr.length);
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
  }, []);

  const RowItem = ({ index, style }) => {
    const item = arr[start + index];
    return (
      <Link to={'/MovieMain/'} state={{ tvShow: item }}>
        <div style={style}>
          <Card key={item._id} poster={item.poster_path} />
        </div>
      </Link>
    );
  };

  const handlePrev = () => {
    if (start > 0) {
      const newStart = Math.max(start - 10, 0);
      const newEnd = start;
      setStart(newStart);
      setEnd(newEnd);
      rowRef.current.scrollToItem(start - newStart - 1, {
        behavior: 'smooth',
        align: 'start',
      });
    }
  };

  const handleNext = () => {
    if (end < arr.length) {
      const newStart = end;
      const newEnd = Math.min(end + 10, arr.length);
      setStart(newStart);
      setEnd(newEnd);
      rowRef.current.scrollToItem(newStart, {
        behavior: 'smooth',
        align: 'start',
      });
    }
  };

  return (
    <div className='row' ref={rowRef}>
      <h2>{title}</h2>

      <div >
        <button className='arrow-button' onClick={handlePrev}>
          <AiOutlineArrowLeft />
        </button>
        <FixedSizeList 
      
          height={290}
          width={1240}
          itemSize={220}
          itemCount={arr.length}
          layout='horizontal'
     
        >
          {RowItem}
        </FixedSizeList>

        <button className='arrow-button' onClick={handleNext}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Row;