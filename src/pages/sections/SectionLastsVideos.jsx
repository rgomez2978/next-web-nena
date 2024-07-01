import React, { useRef, useState } from 'react'
// import MediaComp from '@/components/MediaComp'
import TitleComp from '@/components/TitleComp'
import useStore from '@/stores/index';


import MediaComp from '@/components/MediaComp';

const SectionLastsVideos = ({
  title,
  titleType,
  description,
  data
}) => {
  // console.log('SectionLastsVideos', title, titleType, description, data)


  // document.getElementById('tblproductos').children[1].getElementsByTagName('tr').length

  /**
   * Validate string URL
   * @param {*} val
   * @returns
   */
  const isValidURL = (val) => {
    try {
      new URL(val);
      return true;
    } catch (_) {
      return false;
    }
  }


  return (
    <>
      {(data && data.length > 0) && (
        <>
          <div className='flex flex-col justify-center items-center w-[87%] mx-auto h-full mt-10 bg-transparent '>
            <TitleComp
              title={title}
              description={description}
              type={titleType}
            />
            <div className=" flex w-[90%] lg:w-[95%] h-auto px-4 mt-5 mb-5 md:mb-10 md:px-5 lg:px-0 xl:px-20 2xl:px-30   ">
              <div className={`flex flex-col-reverse lg:flex-row w-full h-full `}>
                <div className=" w-full flex justify-center items-center lg:w-1/2 lg:mb-0 h-full pt-5 ">
                  <div className="flex flex-col items-start justify-start w-[90%] h-full mb-6 ">
                    <h2 className='w-full text-nena-secondary text-lg font-bold normal-case sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl '>
                      {data[0].title}
                    </h2>
                    <p className='text-lg text-gray-700 md:text-xl'>
                      {/* {data[0].description} */}
                    </p>
                    <ul className="flex-1 p-0 mt-4 space-y-0 leading-7 text-gray-500 font-semibold ">
                      {data[0].items.map((item) => (
                        <li key={item.id} className="inline-flex items-center w-full text-base lg:text-lg ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon mr-2 w-5 h-5 " fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          {item.title}
                        </li>

                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`relative flex justify-center lg:justify-end items-center w-full lg:w-1/2 h-auto  md:h-[300px] lg:h-full border-2xl  `}>

                  {data[0].videos.map((item) => (
                    <div key={item.id} className="flex justify-center items-center w-auto h-full ">
                      {isValidURL(item.url) ? (
                        <MediaComp data={item} type={'web'} />
                      ) : (
                        <MediaComp data={item} type={'local'} />
                      )}
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </>
      )
      }

    </>
  )
}

export default SectionLastsVideos