'use client';

import { useEffect, useState } from 'react'
import { searchBannerFetch } from '@/services/servicesWeb'
import HeaderComp from "@/components/HeaderComp/HeaderComp";


export default function PageInicio() {
  const [loadimages, setLoadimages] = useState([])

  /**
   * Carga los datos de las imagenes asociadas al banner
   */
  const getBanners = async () => {
    const data = await searchBannerFetch()
    const filteredData = data.filter(item => item.status === true);

    filteredData && filteredData !== undefined
      ? setLoadimages(filteredData)
      : null;
  }

  useEffect(() => {
    getBanners()
  }, [])



  // console.log('loadimages', loadimages, loadimages.length)

  return (
    <>
      <div className='flex flex-col items-center justify-center '>

        <div className='w-full'>
          {(loadimages && loadimages.length > 0) && (
            <HeaderComp
              images={loadimages}
              multi
              cssClass="rounded-2xl w-[100%] h-[200px] sm:h-[200px] md:h-[300px] lg:h-[350px]"
            />
          )}
        </div>




        <main className=' w-[90%] md:w-[80%] '>
          <div className='text-blue mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum!
          </div>
        </main>
      </div>

      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum placeat illo aut suscipit! Officia excepturi illo autem aperiam expedita. Tenetur quidem illum minus quod laborum, iusto labore itaque ratione!
        </div>
      </main> */}

      {/*
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
      </div> */}
    </>
  );
}
