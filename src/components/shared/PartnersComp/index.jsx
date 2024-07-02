/* eslint-disable @next/next/no-img-element */
import React from 'react'


const ListPartners = ({ data }) => {
  return (
    <>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_li]:md:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {data.map(({ id, order, title, url }) => (
          <li key={id} className=' rounded-xl border-2 px-0 flex w-full h-full justify-center items-center border-gray-200 '>
            <img src={url} alt={title} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_li]:md:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {data.map(({ id, order, title, url }) => (
          <li key={id} className=' rounded-xl border-2 px-0 flex w-full h-full justify-center items-center border-gray-200 '>
            <img src={url} alt={title} />
          </li>
        ))}
      </ul>
    </>
  )
}


const PartnersComp = ({
  data
}) => {


  return (
    <>

      {/* <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_56px,_black_calc(100%-128px),transparent_100%)]  border border-red-500"
      >
        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {data.map(({ id, order, title, url }) => (
            <li key={id} className=' rounded-xl border-4 flex w-full h-full justify-center items-center border-gray-200'>
              <img src={url} alt={title} />
            </li>
          ))}
        </ul>
      </div> */}


      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ListPartners data={data} />
      </div>
    </>
  )
}

export default PartnersComp