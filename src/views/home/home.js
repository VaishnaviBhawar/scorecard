{/*import React from 'react';
import  { useState, useEffect } from 'react';
import toast , {ToastBar} from 'react-hot-toast';

import Cardicon from './../../assets/icons/credit-card.png';

import Scorecards from '../../component/scorecard/card';

function Home() {
  const [teamA, setTeamA] = React.useState(0);
  const [teamB, setTeamB] = React.useState(0);
  const [winner, setWinner] = useState(null);
  const MAX_SCORE = 5;


  useEffect(() => {
   if (teamA < MAX_SCORE && teamB < MAX_SCORE) {
  return
   }
   if(teamA == MAX_SCORE) {
    setWinner('Team A');
     toast.success('Team A won the match');
   }
    if(teamB == MAX_SCORE) {
      setWinner('Team B');
      toast.success('Team B won the match');
    }
  }, [ teamA, teamB]);
  return (
    <div className=' mt-5px ml-5px mr-5px mb-5px p-5px rounded-lg '>
    <div className='flex items-center justify-center py-5 sm:py-5 border-2 bg-blue-50 border-gray-600'>
        <img src={Cardicon} alt="score card img" className='sm:h-[100px] h-[50px] w-[50px] sm:w-[100px] mr-2 bg-blue-50' />
        <span className='text-pink-600 sm:text-[40px] text-center text-[20px] text-4xl bg-white'>
     ScoreMaster
        </span>
        
      </div>
     
      <div className='flex justify-around flex-wrap mt-[20px]'>

      <Scorecards
          score={teamA}
          teamName="Team A"
          increaseScore={() => {
           
            setTeamA(teamA - 1);
          }
            
          }
          decreaseScore={() => setTeamA(teamA + 1)}
          winner={winner}
        />
        <Scorecards
          score={teamB}
          teamName="Team B"
          increaseScore={() => {
           
            setTeamB(teamB - 1);
          }
            
          }
          decreaseScore={() => setTeamB(teamB + 1)}
         winner={winner}
 />
       


       
      </div>
      {winner ? 
      <p className='text-center  sm: mt-[50px] sm:text-[30px] text-[20px]   '>
      Winner  is  <b className='text-red-700'>{winner}</b> 🏆🏆🏆🎉
    </p> : null}
      
      <div className='flex justify-center  mt-[60px] mb-[20px] '>
        <button  className='bg-red-200 text-red-800 py-[5px] px-[20px] text-[25px] border-2 border-red-900 rounded-full' onClick={()=> 
      {  setTeamA(0);
          setTeamB(0);
          setWinner(null);
        
        }
      }>Reset</button>
      </div> 
    </div>
  );
}



export default Home;

*/}
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Cardicon from './../../assets/icons/credit-card.png';
import Scorecards from '../../component/scorecard/card';

function Home() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [winner, setWinner] = useState(null);
  const MAX_SCORE = 5;

  useEffect(() => {
    if (teamA < MAX_SCORE && teamB < MAX_SCORE) {
      return;
    }
    if (teamA === MAX_SCORE) {
      setWinner('Team A');
      toast.success('Team A won the match');
    }
    if (teamB === MAX_SCORE) {
      setWinner('Team B');
      toast.success('Team B won the match');
    }
  }, [teamA, teamB]);

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-5'>
      <div className='flex items-center justify-center py-10'>
        <img src={Cardicon} alt="score card img" className='h-20 w-20 sm:h-40 sm:w-40 mr-4' />
        <span className='text-white text-4xl sm:text-6xl font-bold'>
          ScoreMaster
        </span>
      </div>
      
      <div className='flex justify-around flex-wrap mt-10'>
        <Scorecards
          score={teamA}
          teamName="Team A"
          increaseScore={() => {
            setTeamA(teamA - 1);
          }}
          decreaseScore={() => setTeamA(teamA + 1)}
          winner={winner}
        />
        <Scorecards
          score={teamB}
          teamName="Team B"
          increaseScore={() => {
            setTeamB(teamB - 1);
          }}
          decreaseScore={() => setTeamB(teamB + 1)}
          winner={winner}
        />
      </div>

      {winner ? 
      <p className='text-center mt-10 text-2xl sm:text-4xl text-white'>
        Winner is <b className='text-yellow-300'>{winner}</b> 🏆🏆🏆🎉
      </p> : null}
      
      <div className='flex justify-center mt-10'>
        <button className='bg-red-500 text-white py-2 px-10 text-xl sm:text-2xl border-2 border-red-700 rounded-full hover:bg-red-700 transition duration-300' onClick={() => {
          setTeamA(0);
          setTeamB(0);
          setWinner(null);
        }}>
          Reset
        </button>
      </div> 
    </div>
  );
}

export default Home;