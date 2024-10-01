'use client';
import React, { useState, useEffect } from "react";
import {poppins} from '@/app/fonts/fonts'
import CloseIcon from '@/app/public/close-icon.svg'
import Image from 'next/image';
import { ChevronDownIcon,MagnifyingGlassIcon  } from '@heroicons/react/24/outline';

import '@/app/ui/callnotes/dashboard'
import { CompanyMetaData } from "@/app/models/companies";


interface SearchCompaniesProps {
  isOpen: boolean; // Explicitly type `isOpen` as boolean
  onClose: () => void; // `onClose` is a function that returns void
  items: CompanyMetaData[]; // `items` is an array of strings
  onSelect: (name: CompanyMetaData) => void; // `onSelect` is a function that returns selected Companies

}



const SearchCompanies: React.FC<SearchCompaniesProps> = ({ isOpen, onClose, items, onSelect }) => {
  const [searchCompanie, setSearchCompanie] = useState<string>(""); // Set the type for searchTerm

  // Filtered search results
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchCompanie.toLowerCase())
  ).slice(0,3);





  // Close the popup on outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === "backdrop") {
      onClose();
    }
  };

  const requestSearch = async(e: { preventDefault: () => void; }) => {
    // Simulate API request for search
    // e.preventDefault();

    console.log('Requesting Search for:', searchCompanie);

  };

  // <div className="w-[880px] h-[351px] bg-white rounded-xl" />
  return (
    isOpen && (
      <div
        id="backdrop"
        className="fixed inset-0 bg-[#0f0f0f] bg-opacity-60  flex justify-center items-center"
        onClick={handleBackdropClick}
      >
        <div className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-xl max-h-96">
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <Image src={CloseIcon} width={16} height={16} alt="logo"  />
          </button>

          {/* Search Form */}
          <h2 className={`${poppins.className} flex justify-center antialiasedtext-2xl text-black text-[20px] font-medium mb-5`}>Existing Company</h2>


         <form className="w-full mb-4"
          onSubmit={requestSearch}>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search Companies</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <MagnifyingGlassIcon className='relative w-4 h-4 '/>
                </div>
                <input 
                 type="search" id="default-search" 
                 className="block h-10 w-full p-4 ps-10 text-sm text-gray-900 border bg-[#f2f3f5] rounded-lg border-[#dbdbdb] focus:outline-none focus:bgColor2 focus:border-bgColor2"
                 required 
                 value={searchCompanie}
                 onChange={(e) => setSearchCompanie(e.target.value)}
                 placeholder="Insert command or search text"/>
            </div>
         </form>
          {/* Search Results */}
          <ul className="max-h-60 overflow-y-auto rounded-md border bg-[#f2f3f5]">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`${poppins.className} antialiased text-[#333230] text-[16px] font-medium p-2 hover:bg-bgColor2 hover:text-white cursor-pointer rounded-md`}
                  onClick={() => onSelect(item)}
                   //{() => alert(`You selected: ${item}`)}
                   //onClick={() => onSelect(${item})}
                >
                  {item.name}
                  <div className="border-0 border-[#d5d5d5]"></div>
                </li>
              ))
            ) : (
              <li className="text-gray-500 p-2">No items found</li>
            )}
          </ul>
        </div>
      </div>
    )
  );
};

export default SearchCompanies;
