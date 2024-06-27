import React from 'react';
import PropTypes from 'prop-types';

export default function ExpertCard(props) {
  ExpertCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
  };
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
} 
const limitedWords = (word) => {
  const limitedChar = word.slice(0, 53);
  return limitedChar; 
}
  return (
    <div>
      <div className='h-[21vh] w-[88vw] bg-Secondary border-4 hover:border-4 hover:border-Quaternary hover:delay-75 mb-3 md:mb-6 Add-Scrollbar flex flex-row items-center rounded-2xl md:w-[37vw] md:h-[25vh] cursor-pointer'>
        <div className='h-full w-[45%] flex flex-row justify-center items-center pl-2 '> 
          <div className='h-[17vh] w-[120px] md:h-[19vh] md:w-[160px] flex flex-row justify-center items-center rounded-[50%] border-4 border-Quaternary Card'>
           
          </div>
        </div>
        <div className='h-full w-[55%]  text-Quaternary flex flex-col justify-center gap-3 items-start md:mt-[] md:px-[1vw] pl-[2vw]'>
          <div className='text-2xl md:text-2xl font-bold w-full'>
          {capitalize(props.title)}
          </div>
          <div className='text-lg md:text-xl w-full text-xs break-words'>
          {limitedWords(props.desc)}...
          </div>
        </div>
      </div>
    </div>
  )
}
