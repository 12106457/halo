'use client';
import React, { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { poppins } from '@/app/fonts/fonts';
import { AddCallNotesProps, CallNotesDataModel } from '@/app/models/callnotes';

export default function EquityRelatedForm({notes, onSave} : AddCallNotesProps) {

    const [equityRaised, setEquityRaised] = useState(notes.equity.equityRaised);
    const [equityFuturePlan, setEquityFuturePlan] = useState(notes.equity.equityFuturePlan);
    const [investorName, setInvestorName] = useState(notes.equity.investorName);
    const [equityRaisedByInvestor, setEquityRaisedByInvestor] = useState(notes.equity.equityRaisedByInvestor);
    const [aboutInvestor, setAboutInvestor] = useState(notes.equity.aboutInvestor);
    const [currentValuationDetail, setCurrentValuationDetail] = useState(notes.equity.currentValuationDetail);
    const [benchmmarks, setBenchmarks] = useState(notes.equity.benchmmarks);

    const saveForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Save Particular Form');
        const newData: CallNotesDataModel = {
            ...notes,
            equity: {
                equityRaised: equityRaised,
                equityFuturePlan: equityFuturePlan,
                investorName: investorName,
                equityRaisedByInvestor: equityRaisedByInvestor,
                aboutInvestor: aboutInvestor,
                currentValuationDetail: currentValuationDetail,
                benchmmarks: benchmmarks,

            },
        };
        console.log(newData)
        onSave(newData)

    }


    return  <div className="pl-[20px] pr-[20px] h-[650px] overflow-y-auto relative">

    <div className="w-full relative mb-[20px]">
        <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Equity Raised</div>
        <input
            id="equityRaised"
            className={`${poppins.className} w-full h-[34px] mb-[20px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
            value={equityRaised}
            onChange={(e) => setEquityRaised(e.target.value)}
            placeholder="Amount of equity raised so far."
        />
        <textarea
            id="equityFuturePlan"
            className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
            value={equityFuturePlan}
            onChange={(e) => setEquityFuturePlan(e.target.value)}
            placeholder="Future equity plans"
        />
    </div>

    <div className="w-full relative mb-[20px]">
        <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Investors</div>
        <input
            id="investorName"
            className={`${poppins.className} w-full h-[34px] mb-[20px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
            value={investorName}
            onChange={(e) => setInvestorName(e.target.value)}
            placeholder="Name of the investors."
        />
        <input
            id="equityRaisedByInvestor"
            className={`${poppins.className} w-full h-[34px] mb-[20px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
            value={equityRaisedByInvestor}
            onChange={(e) => setEquityRaisedByInvestor(e.target.value)}
            placeholder="Amount of equity raised so far."
        />
        <textarea
            id="aboutInvestor"
            className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
            value={aboutInvestor}
            onChange={(e) => setAboutInvestor(e.target.value)}
            placeholder="About the investor."
        />
    </div>


    <div className="w-full relative mb-[20px]">
        <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Valuation and Benchmarking</div>

        
        <textarea
            id="currentValuationDetail"
            className={`${poppins.className} w-full h-[123px] mb-[20px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
            value={currentValuationDetail}
            onChange={(e) => setCurrentValuationDetail(e.target.value)}
            placeholder="Current valuation details."
        />

        <input
            id="benchmmarks"
            className={`${poppins.className} w-full h-[34px] ] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
            value={benchmmarks}
            onChange={(e) => setBenchmarks(e.target.value)}
            placeholder="Add benchmarks"
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

//return <p className="flex justify-center items-center text-center font-semibold text-[24px]">Equity Related</p>;
}