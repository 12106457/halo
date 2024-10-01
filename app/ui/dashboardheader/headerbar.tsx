'use client';

import Link from 'next/link';
import Image from 'next/image'
import logoRing from  '@/app/public/logo-ring.png'
import {poppins} from '@/app/fonts/fonts'
import defaultUserIcon from  '@/app/public/default-user-icon.svg'







import { useState, useEffect } from 'react';


import { ChevronDownIcon,MagnifyingGlassIcon  } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/20/solid';

export default function DashboardHeaderBar() {


  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Ensure that the dark mode class is removed
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light'); // Add light mode class

  }, []);


  const requestSearch = async(e: { preventDefault: () => void; }) => {
    // Simulate API request for search
    // e.preventDefault();

    console.log('Requesting Search for:', searchText);

  };


  return (

    
    <div className="flex pl-6 items-center  ">

      <div className="flex">
        <Image src={logoRing} width={40} height={40} alt="logo" className='rounded-full' />
        <ChevronDownIcon className='w-4 pl-1'/>
      </div>


      <div className="flex w-[227px]  left-[138px] absolute gap-5 ">
            <div className={`${poppins.className} antialiased flex text-[#00023c] text-[13px] font-normal`}>
              Reports
              <ChevronDownIcon className='w-4 pl-1'/>
            </div>
            <div className={`${poppins.className} antialiased flex text-[#00023c] text-[13px] font-normal`}>
              Admins
              <ChevronDownIcon className='w-4 pl-1'/>
            </div>
            <div className={`${poppins.className} antialiased flex text-[#00023c] text-[13px] font-normal`}>
              Setup
              <ChevronDownIcon className='w-4 pl-1'/>
            </div>
        </div>

        {/* <div className="flex w-[646px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[600px] 2xl:w-[646px] h-10 left-[427px] absolute bg-[#f2f3f5] rounded border border-[#dbdbdb]"> */}




          <form className="flex  left-[427px] w-[646px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[600px] 2xl:w-[646px] absolute"
          onSubmit={requestSearch}>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <MagnifyingGlassIcon className='relative w-4 h-4 '/>
                </div>
                <input 
                 type="search" id="default-search" 
                 className="block h-10 w-[646px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[600px] 2xl:w-[646px] p-4 ps-10 text-sm text-gray-900 border bg-[#f2f3f5] rounded-lg border-[#dbdbdb] focus:outline-none focus:bgColor2 focus:border-bgColor2"
                 required 
                 value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}
                 placeholder="Insert command or search text"/>
                {/* //<button type="submit" className="text-white absolute end-2.5 bottom-1 h-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            </div>
         </form>


        <div className="flex gap-2 right-6 items-center absolute ">
       
          <Image src={defaultUserIcon} width={34} height={34} alt="logo" className='rounded-full  border-2 border-bgColor2' />
          <text className={`${poppins.className} antialiased flex text-[#030304] text-[13px] font-normal`}> Anuj Kamboj</text>
          <ChevronDownIcon className='w-4 pl-1'/>

      </div>

    </div>

    




// </div>
  );
}