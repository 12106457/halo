'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { poppins } from '@/app/fonts/fonts';
import StrideIcon from  '@/app/public/stride-icon.svg'
import FormIcon from  '@/app/public/call-notes-form-icon.svg'
import Image from 'next/image'
import { useRef } from 'react';

import CalendarClockIcon from  '@/app/public/calendar-clock-icon.svg'


import Particulars from '@/app/ui/callnotes/particular-form'
import BusinessModel from '@/app/ui/callnotes/business-model-form'
import Technology from '@/app/ui/callnotes/technology-form'
import FutureOutlook from '@/app/ui/callnotes/future-outlook-form'
import EquityRelated from '@/app/ui/callnotes/equity-related-form'
import Operations from '@/app/ui/callnotes/operations-form'
import Financial from '@/app/ui/callnotes/financial-form'


import { CallNotesFormTypes } from "@/app/utility/appenum";
import { CallNotesDataModel } from '@/app/models/callnotes';
import {defaultCallNotesDataModel} from '@/app/models/callnotes'


export default function AddCallNotes() {


    const particularFormRef = useRef();
    const businessModelFormRef = useRef();
    const technologyFormRef = useRef();
    const futureOutlookFormRef = useRef();
    const equityRelatedFormRef = useRef();
    const operationsFormRef = useRef();
    const financialFormRef = useRef();



    const CallNotesFormTypesProperties = {
        [CallNotesFormTypes.PARTICULAR]: { title: 'Particular' },
        [CallNotesFormTypes.BUSINESS_MODEL]: { title: 'Business Model / Industry' },
        [CallNotesFormTypes.TECHNOLOGY]: { title: 'Technology' },
        [CallNotesFormTypes.FUTURE_OUTLOOK]: { title: 'Future Outlook' },
        [CallNotesFormTypes.EQUITY_RELATED]: { title: 'Equity Related' },
        [CallNotesFormTypes.FINANCIAL]: { title: 'Financial' },
        [CallNotesFormTypes.OPERATIONS]: { title: 'Operations' },
    
      };




    const params = useSearchParams();
    // const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const identifier = params.get('id');
    const callNoteID = params.get('noteId') || 0;

    const name = params.get('name');
    const [callNotes, setCallNotes] = useState<CallNotesDataModel>(defaultCallNotesDataModel); // Initialize state with a default value
    const [currentFormType, setFormType] = useState<CallNotesFormTypes>(CallNotesFormTypes.PARTICULAR); // Initialize state with a default value
    const [notesId, setNotesId] = useState(0); 

    const changeFormType = (formType: CallNotesFormTypes) => {
        setFormType(formType);
        console.log('Selected Form Type: ', {formType})
    };

    const updateCallNotesData = (newData: CallNotesDataModel) => {

        // setCallNotes(newData);
        console.log("updateCallNotesData")
        console.log(newData)


        const userProfile = localStorage.getItem('userProfile');
        let userId: number | null = null; // Initialize userId


        if (userProfile) {
            try {
                const parsedProfile = JSON.parse(userProfile); // Parse the JSON string to an object
                userId = parsedProfile.id; // Access the id property
                const data: CallNotesDataModel = {
                    ...newData, 
                    user: parsedProfile.id ,
                    company_details: Number(identifier),
                    id: notesId,
                    particulars:newData.particulars,
                    business_model:newData.business_model,
                    technology:newData.technology,
                    future_outlook: newData.future_outlook,
                    equity: newData.equity,
                    operations: newData.operations,
                    financial: newData.financial,
                    
                };
                console.log("newdata")
                console.log(data)
                setCallNotes(data)
                
            } catch (error) {
                console.error('Failed to parse user profile:', error);
            } finally {

            }
        } else {
            console.warn('User profile not found in localStorage');
        }

        // setCallNotes(newData)

        //requestSaveNotes()

       




       
    };

     // Use the stateValue in a second API request after it changes
  useEffect(() => {
    setNotesId(Number(callNoteID))
    if (callNotes) {
      const makeApiRequestWithState = async () => {
        const token = `Bearer ${localStorage.getItem('authToken')}`

        // const authToken = 'Bearer ' + localStorage.getItem('authToken')

        if (!token) {
            console.error('No token found in localStorage');
            return;
          }

          console.log(token)

        try {
          // Make API request using the updated state value
          const response = await fetch('/api/callnotes/add', {
            method: "POST",
            body: JSON.stringify(callNotes),
            headers: {
                authorization: token
          }
          });
    
          const data = await response.json();
    
          if (data.status == 400 && data.message == "User not found.") {
            
          } else {

              const id = data['data']['id']
              setNotesId(id)

          }
        } catch (error) {
          console.error('Error fetching data with state value', error);
        }
      };

      makeApiRequestWithState();
    }
  }, [callNotes]); // This useEffect triggers whenever stateValue changes



    const requestSaveNotes = async () => {

        
       


           

        
  
        // Assuming the OTP request is successful:
         // Go to the next step (OTP input)
      };
    



   

    return <div className='flex w-full h-full relative'>

       {/* form items panel */}
        <div className='flex-col w-[40%] h-full relative pl-6 pt-6 bg-transparent'>
            <div className={`${poppins.className} antialiased text-bgColor1 text-2xl font-medium mb-[25px] `}>Add Call Notes</div>
            <div className={`${poppins.className} flex antialiased text-black text-[20px] font-medium mb-[42px] `}>
                <Image src={StrideIcon} width={50} height={100} alt="logo" className='mr-1' />
                {name}
            </div>

            <div className='flex-col overflow-y-auto  h-[600px] relative'>
                     {/* Particulars */}
                <div className={`${poppins.className} flex antialiased items-center`} onClick={()=>changeFormType(CallNotesFormTypes.PARTICULAR)}>
                    <div  className='mr-1 bg-gray-200 rounded-full'>
                        <Image src={FormIcon} width={33} height={33} alt="logo" className='p-2 ' />
                    </div>
                    <div className="text-black text-[16px] font-medium">Particulars</div>
                </div>
                <div className={`flex items-center justify-center w-[33px] h-[60px]`}>
                        <div className="w-[1px] h-full border-l border-dashed relative bg-bgColor2"/>
                </div>

                {/* Business Model / Industry */}
                <div className={`${poppins.className} flex antialiased items-center`} onClick={()=>changeFormType(CallNotesFormTypes.BUSINESS_MODEL)}>
                    <div  className='mr-1 bg-gray-200 rounded-full'>
                        <Image src={FormIcon} width={33} height={33} alt="logo" className='p-2' />
                    </div>
                    <div className="text-black text-[16px] font-medium">Business Model / Industry</div>
                </div>
                <div className={`flex items-center justify-center w-[33px] h-[60px]`}>
                        <div className="w-[1px] h-full border-l border-dashed relative bg-bgColor2"/>
                </div>

                {/* Technology */}
                <div className={`${poppins.className} flex antialiased items-center`} onClick={()=>changeFormType(CallNotesFormTypes.TECHNOLOGY)}>
                    <div  className='mr-1 bg-gray-200 rounded-full'>
                        <Image src={FormIcon} width={33} height={33} alt="logo" className='p-2' />
                    </div>
                    <div className="text-black text-[16px] font-medium">Technology</div>
                </div>
                <div className={`flex items-center justify-center w-[33px] h-[60px]`}>
                        <div className="w-[1px] h-full border-l border-dashed relative bg-bgColor2"/>
                </div>

                {/* Future Outlook */}
                <div className={`${poppins.className} flex antialiased items-center`} onClick={()=>changeFormType(CallNotesFormTypes.FUTURE_OUTLOOK)}>
                    <div  className='mr-1 bg-gray-200 rounded-full'>
                        <Image src={FormIcon} width={33} height={33} alt="logo" className='p-2' />
                    </div>
                    <div className="text-black text-[16px] font-medium">Future Outlook</div>
                </div>
                <div className={`flex items-center justify-center w-[33px] h-[60px]`}>
                        <div className="w-[1px] h-full border-l border-dashed relative bg-bgColor2"/>
                </div>

                {/* Equity Related */}
                <div className={`${poppins.className} flex antialiased items-center`} onClick={()=>changeFormType(CallNotesFormTypes.EQUITY_RELATED)}>
                    <div  className='mr-1 bg-gray-200 rounded-full'>
                        <Image src={FormIcon} width={33} height={33} alt="logo" className='p-2' />
                    </div>
                    <div className="text-black text-[16px] font-medium">Equity Related</div>
                </div>
                <div className={`flex items-center justify-center w-[33px] h-[60px]`}>
                        <div className="w-[1px] h-full border-l border-dashed relative bg-bgColor2"/>
                </div>

                {/* Operations */}
                <div className={`${poppins.className} flex antialiased items-center`} onClick={()=>changeFormType(CallNotesFormTypes.OPERATIONS)}>
                    <div  className='mr-1 bg-gray-200 rounded-full'>
                        <Image src={FormIcon} width={33} height={33} alt="logo" className='p-2' />
                    </div>
                    <div className="text-black text-[16px] font-medium">Operations</div>
                </div>
                <div className={`flex items-center justify-center w-[33px] h-[60px]`}>
                        <div className="w-[1px] h-full border-l border-dashed relative bg-bgColor2"/>
                </div>

                {/* Financial */}
                <div className={`${poppins.className} flex antialiased items-center`} onClick={()=>changeFormType(CallNotesFormTypes.FINANCIAL)}>
                    <div  className='mr-1 bg-gray-200 rounded-full'>
                        <Image src={FormIcon} width={33} height={33} alt="logo" className='p-2' />
                    </div>
                    <div className="text-black text-[16px] font-medium">Financial</div>
                </div>

                <div className='h-[100px] relative'/>
            </div>

           
        </div>

        {/* Seperator */}         
        <div className='flex w-[2.5px] h-full relative bg-[#d9d9d9] left-1' />  

       {/* forms panel */}
        <div className='flex-col w-full h-full justify-center items-center relative'>
            {/* Top Toolbar */}
            <div className="flex w-full h-[102px] relative mb-[20px] items-center justify-normal">
            
                <div className={`${poppins.className} ml-[20px] antialiased text-bgColor1 text-xl font-medium`}>

                    {CallNotesFormTypesProperties[currentFormType].title}
                </div>

                <div className='flex items-center justify-evenly  w-[161px] h-[38px] rounded-[25px] border border-bgColor2 right-[20px] absolute'>
                    <Image src={CalendarClockIcon} width={24} height={24} alt="logo" className='left-[7px] absolute' />
                    <div className= {`${poppins.className} left-[42px] absolute text-[#212121] text-sm font-medium`}>
                        Set Reminder
                    </div>
                </div>
            </div>
            {currentFormType === CallNotesFormTypes.PARTICULAR && <Particulars notes={callNotes} onSave={updateCallNotesData} />}
            {currentFormType === CallNotesFormTypes.BUSINESS_MODEL && <BusinessModel notes={callNotes} onSave={updateCallNotesData}/>}
            {currentFormType === CallNotesFormTypes.TECHNOLOGY && <Technology notes={callNotes} onSave={updateCallNotesData}/>}
            {currentFormType === CallNotesFormTypes.FUTURE_OUTLOOK && <FutureOutlook notes={callNotes} onSave={updateCallNotesData }/>}
            {currentFormType === CallNotesFormTypes.EQUITY_RELATED && <EquityRelated notes={callNotes} onSave={updateCallNotesData}/>}
            {currentFormType === CallNotesFormTypes.OPERATIONS && <Operations notes={callNotes} onSave={updateCallNotesData}/>}
            {currentFormType === CallNotesFormTypes.FINANCIAL && <Financial notes={callNotes} onSave={updateCallNotesData}/>}

            {/* Bottom Toolbar */}
            {/* <div className="flex justify-center items-center absolute bottom-0 left-1 right-1 w-full h-[102px] mb-[40px]">
            <button 
                className={`${poppins.className} antialiased w-[150px] h-12 rounded-[25px] font-medium text-white bg-bgColor2 hover:bg-bgColor1 items-center absolute`}
                onClick={saveCurrentForm}
              >
                Save
            </button>
            </div> */}
        </div>

    </div>
    
    // <p >Company: {name} Identifier: {identifier}</p>;
}