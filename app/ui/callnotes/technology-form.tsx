'use client';
import React, { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { poppins } from '@/app/fonts/fonts';
import { AddCallNotesProps, CallNotesDataModel } from '@/app/models/callnotes';

export default function TechnologyForm({notes, onSave} : AddCallNotesProps) {

    const [sofwareUsed, setSoftwareUsed] = useState(notes.technology.softwareUsed);

    const saveForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Save technology Form ', sofwareUsed);

        const newData: CallNotesDataModel = {
            ...notes,
            technology: {
                softwareUsed: sofwareUsed, // Update only the details
            },
        };
        console.log(newData)
        onSave(newData)

    }


 


    return <div className="pl-[20px] pr-[20px] h-[550px] overflow-y-auto relative">
                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Software’s Used</div>
                    <textarea
                        id="sofwareUsed1"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={sofwareUsed}
                        onChange={(e) => setSoftwareUsed(e.target.value)}
                        placeholder="List key software and technology stacks the company uses, including any proprietary technology."
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
    
    
    // <p className="flex justify-center items-center text-center font-semibold text-[24px]">Technology</p>;
}