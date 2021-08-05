import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {AiOutlineStar } from 'react-icons/ai';


const Rating = ({ value, total }) => {
  return (
    <div className="rating">
      <span style={{ color: "#FFC947" }}>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span style={{ color: "#FFC947" }}>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span style={{ color: "#FFC947" }}>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span style={{ color: "#FFC947" }}>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span style={{ color: "#FFC947" }}>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span>{total}</span>
    </div>
  );

 }

export default Rating




    //   <span>
    //     {value >= 1 ? (
    //       <FaStar />
    //     ) : value >= 0.5 ? (
    //       <FaStarHalfAlt />
    //     ) : (
    //       <FaStar />
    //     )}
    //   </span>
    //   <span>
    //     {value >= 2 ? (
    //       <FaStar />
    //     ) : value >= 1.5 ? (
    //       <FaStarHalfAlt />
    //     ) : (
    //       <FaStar />
    //     )}
    //   </span>
    //   <span>
    //     {value >= 3 ? (
    //       <FaStar />
    //     ) : value >= 2.5 ? (
    //       <FaStarHalfAlt />
    //     ) : (
    //       <FaStar />
    //     )}
    //   </span>
    //   <span>
    //     {value >= 4 ? (
    //       <FaStar />
    //     ) : value >= 3.5 ? (
    //       <FaStarHalfAlt />
    //     ) : (
    //       <FaStar />
    //     )}
    //   </span>
    //   <span>
    //     {value >= 5 ? (
    //       <FaStar />
    //     ) : value >= 4.5 ? (
    //       <FaStarHalfAlt />
    //     ) : (
    //       <FaStar />
    //     )}
    //   </span>