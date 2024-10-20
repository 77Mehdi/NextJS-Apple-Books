import React from 'react';

const StarRating = ({ rating }) => {
  // Function to create an array of stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-3 h-3 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27L16.18 19 15.64 12.91 20 8.64 13.81 8.34 10 2 6.19 8.34 0 8.64 4.36 12.91 3.82 19 10 15.27z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center mb-3">
      {renderStars()}
      <span className="ml-2 text-gray-500 text-[12px] ">{rating} Ratings</span> 
    </div>
  );
};

export default StarRating;
