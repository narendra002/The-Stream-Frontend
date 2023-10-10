import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FixedSizeList } from 'react-window';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



const Cards = ({ movie }) => {
  return (
    <Link to={'/MovieMain/'} state={{ tvShow: movie }} className="text-white no-underline">
      <div className="p-4 ">
        <img className="" src={movie ? movie.poster_path : ''} />

        
      </div>
    </Link>
  );
}

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
      <div style={style}>
        {item ? (
          <Cards movie={item} />
        ) : (
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        )}
      </div>
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

  function getItemSize(height, itemCount) {
    const totalPadding = 20; // total padding (top and bottom)
    const availableHeight = height - totalPadding;
    const itemHeight = availableHeight / itemCount;
    return itemHeight;
  }

  const itemSize = getItemSize(250, 1);

  return (
    <div className='' ref={rowRef}>
      <h2 className="pl-5/4 font-light">{title}</h2>
      <div className="flex items-center">
        <button className='arrow-button' onClick={handlePrev}>
          <AiOutlineArrowLeft />
        </button>
        <FixedSizeList
        className='w-48 h-48 overflow-x-hidden'
          style={{ height: '29rem', width: '120rem' }}
          height={'height'}
          width={1240}
          itemSize={itemSize}
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
