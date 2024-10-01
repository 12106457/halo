'use client';

import React, { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { poppins } from '@/app/fonts/fonts';
import { AddCallNotesProps, CallNotesDataModel } from '@/app/models/callnotes';


export default function FutureOutlookForm({notes, onSave} : AddCallNotesProps) {

    const [companyOutlook, setCompanyOutlook] = useState(notes.future_outlook.companyOutlook);
    const [industryOutlook, setIndustryOutlook] = useState(notes.future_outlook.industryOutlook);
    const [domesticInternationalPlan, setDomesticInternationalPlan] = useState(notes.future_outlook.domesticInternationalPlan);

    const saveForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Save Future Outlook Form');

        const newData: CallNotesDataModel = {
            ...notes,
            future_outlook: {
                companyOutlook: companyOutlook, // Update only the details
                industryOutlook: industryOutlook,
                domesticInternationalPlan: domesticInternationalPlan
                
            },
        };
        console.log(newData)
        onSave(newData)

    }


    return <div className="pl-[20px] pr-[20px] h-[650px] overflow-y-auto relative">
                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Company Outlook</div>
                    <textarea
                        id="companyOutlook"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={companyOutlook}
                        onChange={(e) => setCompanyOutlook(e.target.value)}
                        placeholder="Describe the company’s projected future, including growth plans, market expansion, and strategic goals."
                    />
                </div>

                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Industry Outlook</div>
                    <textarea
                        id="industryOutlook"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={industryOutlook}
                        onChange={(e) => setIndustryOutlook(e.target.value)}
                        placeholder="Provide insights into industry trends and how they may impact the company."
                    />
                </div>


                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Domestic/International Plans</div>
                    <textarea
                        id="domesticInternationalPlan"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={domesticInternationalPlan}
                        onChange={(e) => setDomesticInternationalPlan(e.target.value)}
                        placeholder="Detail any plans for domestic and international expansion."
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
    
    
    //<p className="flex justify-center items-center text-center font-semibold text-[24px]">Future Outlook</p>;
}