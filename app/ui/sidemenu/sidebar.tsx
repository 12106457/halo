"use client";

import Link from 'next/link';
import NavLinks from '@/app/ui/sidemenu/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import {poppins} from '@/app/fonts/fonts'


export default function SideBar() {
  return (
    <div className="flex   flex-col px-3 py-4 md:px-2 border-r-2 border-gray-200 bg-white w-[14%] relative bg-slate-50" >
      <div className="flex grow flex-row  h-full justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className={`${poppins.className} antialiased hidden h-auto w-full grow rounded-md bg-gray-50 md:block`}></div>
      </div>
    </div>
  );
}