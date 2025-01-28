import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ onClick, className, icon }) {
  return (
    <button className={`bg-blue-200 text-white p-2 rounded border-gray-300 border-[3px] hover:bg-red-100 mt-[30px] mb-[60px] ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default Button;