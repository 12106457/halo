'use client';

import React, { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { poppins } from '@/app/fonts/fonts';
import { AddCallNotesProps, CallNotesDataModel } from '@/app/models/callnotes';

export default function OperationsForm({notes, onSave} : AddCallNotesProps) {

    const [supplierName, setSupplierName] = useState(notes.operations.supplierName);
    const [supplierLocation, setSupplierLocation] = useState(notes.operations.supplierLocation);
    const [notesOnSupplier, setNotesOnSupplier] = useState(notes.operations.notesOnSupplier);
    const [cutomerDetails, setcutomerDetails] = useState(notes.operations.cutomerDetails);

    const saveForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Save Operations Form');

        const newData: CallNotesDataModel = {
            ...notes,
            operations: {
                supplierName: supplierName,
                supplierLocation: supplierLocation,
                notesOnSupplier: notesOnSupplier,
                cutomerDetails: cutomerDetails
            },
        };
        console.log(newData)
        onSave(newData)

    }

    return <div className="pl-[20px] pr-[20px] h-fit overflow-y-auto relative">
                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Suppliers</div>
                    <div className='flex gap-[20px] mb-[20px]'>
                        <input
                                id="supplierName"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={supplierName}
                                onChange={(e) => setSupplierName(e.target.value)}
                                placeholder="Name"
                        />

                        <input
                                id="supplierLocation"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={supplierLocation}
                                onChange={(e) => setSupplierLocation(e.target.value)}
                                placeholder="Location"
                        />

                    </div>
                    
                    <textarea
                        id="notesOnSupplier"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={notesOnSupplier}
                        onChange={(e) => setNotesOnSupplier(e.target.value)}
                        placeholder="Notes about the Supplier."
                    />
                </div>

                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Customer</div>
                    <textarea
                        id="cutomerDetails"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={cutomerDetails}
                        onChange={(e) => setcutomerDetails(e.target.value)}
                        placeholder="Describe the customer base, key accounts, or demographics served by the company."
                    />
                </div>
                <div className="flex justify-center items-center relative bottom-0 left-1 right-1 w-full h-[102px] mb-[40px]">
                    <button 
                        className={`${poppins.className} antialiased w-[150px] h-12 rounded-[25px] font-medium text-white bg-bgColor2 hover:bg-bgColor1 items-center absolute`}
                        onClick={saveForm}
                    >
                        Save
                    </button>
                </div>

            </div>
    //<p className="flex justify-center items-center text-center font-semibold text-[24px]">Operations</p> ;
}