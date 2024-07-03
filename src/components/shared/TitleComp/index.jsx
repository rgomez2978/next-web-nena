/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react'


const TitleComp = ({ title, description, type }) => {
  const [activeCicle, setActiveCicle] = useState(false)
  const [words, setWords] = useState([])
  const [wordscant, setWordscant] = useState(0)

  const transformTitle = (split) => {
    if (split.length === 1) {
      words.push(title.substr(0, Math.round(title.length / 2) - 1));
      words.push(title.substr(Math.round(title.length / 2) - 1, title.length));
      setWordscant(1);
    } else {
      words.push(split[0], split[1]);
      setWordscant(2)
    }
    setActiveCicle(true);
  }

  useEffect(() => {
    if (title !== '') {
      if (!activeCicle) {
        const split = title.split(" ");
        transformTitle(split);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])



  return (
    <section className={`flex flex-col  w-full items-start justify-center ${description !== '' ? 'mb-8' : 'mb-4'}`}>

      <div className="flex flex-row items-center justify-center w-full mb-2 font-black text-xl normal-case sm:text-xl md:text-xl lg:text-2xl xl:text-3xl ">
        <div className="flex flex-col w-auto">
          <h5 className={`${type === 'dark' ? 'text-nena-menu-text' : 'text-white'} ${wordscant === 2 ? 'pr-1 pl-2' : 'pl-2 pr-0'}`}>
            {words[0]}
          </h5>
          <div className="flex flex-row items-center w-full px-0 -mt-1">
            <div className={`flex w-full h-2 border-b-[0.4rem] rounded-bl-lg ${type === 'dark' ? 'border-nena-menu-text' : 'border-white'}`}>&nbsp;</div>
            <div className={`flex w-4 h-3 mt-1 transform scale-50  rounded-full ${type === 'dark' ? 'bg-nena-menu-text' : 'bg-white'}`}></div>
          </div>
        </div>
        <div className="flex flex-col w-auto">
          <h5 className={`flex w-auto ${type === 'dark' ? 'text-nena-secondary' : 'text-white'} ${wordscant === 2 ? 'pr-2 pl-1' : 'pl-0 pr-2'}`}>
            {words[1]}
          </h5>
          <div className="flex flex-row items-center w-full px-0 -mt-1">
            <div className={`flex w-4 h-3 mt-1 transform scale-50 rounded-full ${type === 'dark' ? 'bg-nena-secondary' : 'bg-white'}`}></div>
            <div className={`flex w-full h-2 border-b-[0.4rem] rounded-br-lg ${type === 'dark' ? 'border-nena-secondary' : 'border-white'}`}>&nbsp;</div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row justify-center items-center px-10 md:px-10 xl:px-52 font-semibold" >
        <p className={`flex ${type === 'dark' ? 'text-gray-500' : 'text-white'} text-normal  text-sm md:text-base text-center `}>
          {description}
        </p>
      </div>

    </section>
  )
}

export default TitleComp