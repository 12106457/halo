'use client';

import React, { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { poppins } from '@/app/fonts/fonts';
import { AddCallNotesProps, CallNotesDataModel } from '@/app/models/callnotes';

export default function FinancialForm({notes, onSave} : AddCallNotesProps) {

    const [lastFinancialYearRevenue, setLastFinancialYearRevenue] = useState(notes.financial.lastFinancialYearRevenue);
    const [lastFinancialYearProfit, setLastFinancialYearProfit] = useState(notes.financial.lastFinancialYearProfit);
    const [currentSale, setCurrentSale] = useState(notes.financial.currentSale);
    const [grossMargin, setGrossMargin] = useState(notes.financial.grossMargin);
    const [netMargin, setNetMargin] = useState(notes.financial.netMargin);
    const [cashBurnRate, setCashBurnRate] = useState(notes.financial.cashBurnRate);
    const [currentCashInhand, setCurrentCashInhand] = useState(notes.financial.currentCashInhand);
    const [existingDebt, setExistingDebt] = useState(notes.financial.existingDebt);
    const [debtUseCase, setDebtUseCase] = useState(notes.financial.debtUseCase);

    const saveForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Save Financial Form');
        const newData: CallNotesDataModel = {
            ...notes,
            financial: {
                lastFinancialYearRevenue: lastFinancialYearRevenue,
                lastFinancialYearProfit: lastFinancialYearProfit,
                currentSale: currentSale,
                grossMargin: grossMargin,
                netMargin: netMargin,
                cashBurnRate: cashBurnRate,
                currentCashInhand: currentCashInhand,
                existingDebt: existingDebt,
                debtUseCase: debtUseCase,

            },
        };
        console.log(newData)
        onSave(newData)


    }



    return <div className="pl-[20px] pr-[20px] h-[650px] overflow-y-auto relative">
                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Last FY Numbers</div>
                    <div className='flex gap-[20px] mb-[20px]'>
                        <input
                                id="lastFinancialYearRevenue"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={lastFinancialYearRevenue}
                                onChange={(e) => setLastFinancialYearRevenue(e.target.value)}
                                placeholder="Revenue"
                        />
                        <input
                                id="lastFinancialYearProfit"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={lastFinancialYearProfit}
                                onChange={(e) => setLastFinancialYearProfit(e.target.value)}
                                placeholder="Profit"
                        />
                    </div>                
                </div>

                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Customer</div>
                    <textarea
                        id="currentSale"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={currentSale}
                        onChange={(e) => setCurrentSale(e.target.value)}
                        placeholder="Current scale of operations, including number of employees, market reach, and production capacity."
                    />
                </div>

                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Margins and Burn</div>
                    <div className='flex gap-[20px] mb-[20px]'>
                        <input
                                id="grossMargin"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={grossMargin}
                                onChange={(e) => setGrossMargin(e.target.value)}
                                placeholder="Gross Margin"
                        />

                        <input
                                id="netMargin"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={netMargin}
                                onChange={(e) => setNetMargin(e.target.value)}
                                placeholder="Net Margin"
                        />

                        <input
                                id="cashBurnRate"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={cashBurnRate}
                                onChange={(e) => setCashBurnRate(e.target.value)}
                                placeholder="Cash Burn Rate"
                        />
                    </div> 
                </div>


                <div className="w-full relative mb-[20px]">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Current Cash</div>
                     <input
                                id="currentCashInhand"
                                className={`${poppins.className} w-full h-[34px]  bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                                value={currentCashInhand}
                                onChange={(e) => setCurrentCashInhand(e.target.value)}
                                placeholder="Current Cash In Hand"
                        />
                </div>

                <div className="w-full relative">
                    <div className={`${poppins.className} mb-[20px] text-black text-lg font-normal`}>Existing Debt and Debt Use Case</div>
                    <input
                        id="existingDebt"
                        className={`${poppins.className} w-full h-[34px] mb-[20px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={existingDebt}
                        onChange={(e) => setExistingDebt(e.target.value)}
                        placeholder="Existing Debt."
                    />
                    <textarea
                        id="debtUseCase"
                        className={`${poppins.className} w-full h-[123px] bg-[#F6F6F6] placeholder:text-[#4c5475] placeholder:text-[13px] placeholder:font-light placeholder:italic text-sm font-normal relative text-black p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2`}
                        value={debtUseCase}
                        onChange={(e) => setDebtUseCase(e.target.value)}
                        placeholder="How the debt is being used or managed."
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
    
    
    
    
    //<p className="flex justify-center items-center text-center font-semibold text-[24px]">Financial</p>;
}