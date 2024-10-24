import { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <span className="text-gray-700 dark:text-gray-300">
      {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-500 hover:underline ml-2"
      >
        {isExpanded ? 'show less' : 'read more'}
      </button>
    </span>
  );
};

export default ReadMore;
