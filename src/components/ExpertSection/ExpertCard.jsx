import React from "react";
import PropTypes from "prop-types";

export default function ExpertCard(props) {
  ExpertCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
  };
  const capitalize = word => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  const limitedWords = word => {
    const limitedChar = word.slice(0, 53);
    return limitedChar;
  };
  return (
    <div>
      <div className="h-[21vh] w-[74vw] md:h-[25vh] md:w-[40vw] lg:h-[25vh] lg:w-[35vw] xl:h-[24vh] xl:w-[31vw]
       bg-Secondary leading-5 md:leading-[3vh] border-4 hover:border-4 hover:ease-out hover:border-Quaternary hover:delay-75
       mb-3 md:mb-6 Add-Scrollbar flex flex-row items-center rounded-2xl cursor-pointer CardDesign">
        <div className="h-full w-[40%] flex flex-row justify-center items-center">
          <div className="h-[12vh] w-[90px] md:h-[14vh] md:w-[130px] md:ml[8vw] flex flex-row justify-center items-center rounded-[50%] border-2 md:border-4 border-Quaternary Card"></div>
        </div>
        <div className="w-[55%] text-Quaternary flex flex-col justify-center gap-3 items-start md:px-[1vw] pl-[2vw] md:pl-[1vw] pt-[2vh] md:mb-[3.5vh]">
          <div className="text-[3vh] md:text-[2.5vh] font-bold w-full">
            {capitalize(props.title)}
          </div>
          <div className="text-[2vh] md:text-[2vh] w-full text-xs break-words md:leading-[1.75vh]">
            {limitedWords(props.desc)}...
          </div>
        </div>
      </div>
    </div>
  );
}
