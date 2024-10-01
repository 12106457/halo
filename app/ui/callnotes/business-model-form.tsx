'use client';
import React, { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { poppins } from '@/app/fonts/fonts';
import { AddCallNotesProps, CallNotesDataModel } from '@/app/models/callnotes';


export default function BusinessModel({notes, onSave} : AddCallNotesProps) {


    const [businessModelDescription, setBusinessModelDescription] = useState(notes.business_model.businessModelDescription);
    const [tamValue, setTAMValue] = useState(notes.business_model.tamValue);
    const [additionalTAMDetails, setAdditionalTAMDetails] = useState(notes.business_model.additionalTAMDetails);
    const [uniqueAdditionalValue, setUniqueAdditionalValue] = useState(notes.business_model.uniqueAdditionalValue);
    const [competitor, setCompetitor] = useState(notes.business_model.competitor);

    const saveForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Save Particular Form');

        const newData: CallNotesDataModel = {
            ...notes,
            business_model: {
                businessModelDescription: businessModelDescription,
                tamValue: tamValue,
                additionalTAMDetails: additionalTAMDetails,
                uniqueAdditionalValue: uniqueAdditionalValue,
                competitor: competitor,

            },
        };
        console.log(newData)
        onSave(newData)

    }

    return  <div className="pl-[20px] pr-[20px] h-[650px] overflow-y-auto relative">

                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Business Model</div>
                    <textarea
                        id="big-text"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={businessModelDescription}
                        onChange={(e) => setBusinessModelDescription(e.target.value)}
                        placeholder="Describe the company’s business model. Include details such as revenue streams, customer acquisition strategies, and value propositions"
                    />
                </div>

                <div className="w-full relative">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>TAM (Total Addressable Market)</div>
                    <input
                        id="big-text"
                        className={`${poppins.className} w-full h-[34px] mb-[20px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={tamValue}
                        onChange={(e) => setTAMValue(e.target.value)}
                        placeholder="Enter the TAM figure in this field."
                    />
                    <textarea
                        id="big-text"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={additionalTAMDetails}
                        onChange={(e) => setAdditionalTAMDetails(e.target.value)}
                        placeholder="Provide additional context or sources for the TAM estimation."
                    />
                </div>

                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Value Add </div>
                    <textarea
                        id="big-text"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={uniqueAdditionalValue}
                        onChange={(e) => setUniqueAdditionalValue(e.target.value)}
                        placeholder="Explain the unique value the company offers within its market."
                    />
                </div>

                <div className="w-full relative">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Competitors</div>
                    <input
                        id="big-text"
                        className={`${poppins.className} w-full h-[34px] mb-[20px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={competitor}
                        onChange={(e) => setCompetitor(e.target.value)}
                        placeholder="Add key competitors"
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
    
    
    // <p className="flex justify-center items-center text-center font-semibold text-[24px]">Business Model/ Industry</p>;
}