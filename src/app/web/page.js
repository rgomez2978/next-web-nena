'use client';

import { useEffect, useState } from 'react'
import { searchBannerFetch } from '@/services/servicesWeb'
import HeaderComp from "@/components/HeaderComp/HeaderComp";
import ProductComp from "@/components/ProductComp/index";


export default function PageInicio() {
  const [loadImages, setLoadImages] = useState([])
  const [loadProducts, setLoadProducts] = useState([])

  /**
   * Carga los datos de las imagenes asociadas al banner
   */
  const getBanners = async () => {
    const data = await searchBannerFetch()
    const filteredData = data.filter(item => item.status === true);

    filteredData && filteredData !== undefined
      ? setLoadImages(filteredData)
      : null;
  }


  /**
   * Carga los datos de las productos
   */
  const getProducts = async () => {
    // const data = await searchProductsFetch()
    // const filteredData = data.filter(item => item.status === true);

    // filteredData && filteredData !== undefined
    //   ? setLoadImages(filteredData)
    //   : null;
  }

  useEffect(() => {
    getBanners()
    getProducts()
  }, [])



  // console.log('loadImages', loadImages, loadImages.length)

  return (
    <>
      <div className='flex flex-col items-center justify-center '>

        <div className='w-full h-full'>
          {(loadImages && loadImages.length > 0) && (
            <HeaderComp
              data={loadImages}
              type={loadImages && loadImages.length > 1 ? 'multi' : 'single'}
              slides={1}
              cssClass="rounded-2xl w-[100%] h-[200px] sm:h-[200px] md:h-[300px] lg:h-[350px]"
            />
          )}
        </div>

        <div className='w-full h-full'>
          {(loadProducts && loadProducts.length > 0) && (
            <ProductComp
              products={loadProducts}
              type='carousel'
              model='product'
              cssClass=""
            // cssClass="rounded-2xl w-[100%] h-[200px] sm:h-[200px] md:h-[300px] lg:h-[350px]"
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
