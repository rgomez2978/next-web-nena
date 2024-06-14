
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { menuWebOptions } from "@/mocks/Menu";


const SidebarComp = () => {
  return (
    <aside className="flex h-full flex-col overflow-y-auto bg-white  ">
      <div className="flex flex-col justify-between mt-6">
        <nav className="space-y-3 ">
          {menuWebOptions.options.map(({ id, name, link, active }) => (
            <Link key={id}
              href={link}
              className="flex items-center px-3 py-2 text-nena-menu-text transition-colors duration-300 transform rounded-lg hover:bg-nena-menu   hover:text-gray-700"
              aria-current="page">
              <span className="mx-2 text-md font-bold uppercase">
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default SidebarComp
