import React from 'react';
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../component/button/button';

function Scorecards({ score, increaseScore, decreaseScore, teamName, winner }) {
  const isWinner = winner === teamName;

  return (
    <div className='bg-white m-5 w-full sm:w-1/3 rounded-lg border-white border-[2px] shadow-lg'>
      <h2 className='text-2xl text-center p-[10px] border-[5px] border-blue-100 rounded-lg text-red-700'>
        {teamName} {isWinner ? "🏆" : ""}
      </h2>
      <h3 className='text-8xl text-center text-red-900 mt-[20px] mb-[20px]'>{score}</h3>
      {!winner && (
        <div className='flex justify-around mt-[20px] mb-[20px]'>
          <Button onClick={decreaseScore} className='' icon={faUserPlus} />
          <Button onClick={increaseScore} className='' icon={faUserMinus} />
        </div>
      )}
    </div>
  );
}

export default Scorecards;