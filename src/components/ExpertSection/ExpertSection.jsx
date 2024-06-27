import React from 'react'
import ExpertCard from './ExpertCard'

export default function ExpertSection() {
  return (
    <>
    
    <div className='h-full w-full Add-Scrollbar'>
        <div className='flex flex-row justify-center mt-[9vh] md:mt-[5vh]'>
      <p className='text-3xl md:text-6xl font-bold'>
        Expert Subject AI Tutor
      </p>
      </div>
      <div className='h-full md:h-full flex flex-col items-center overflow-visible md:flex-row md:flex-wrap gap-1 md:gap-4 md:justify-center mt-[3vh]'>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      <ExpertCard title="Mathematics" desc="I will help you to solve mathematics related problems"/>
      </div>
    </div>
    </>
  )
}
