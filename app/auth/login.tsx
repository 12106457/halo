'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import logoRing from  '@/app/public/logo-ring.png'
import login_animated from  '@/app/public/login_animated.png'
import {poppins} from '@/app/fonts/fonts'
import { toast } from 'react-hot-toast';

export default function Login() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // 1 = email input, 2 = OTP input

    const router = useRouter();
    const pathname = usePathname();
  
    const requestOtp = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Simulate API request for OTP
      console.log('Requesting OTP for:', email);

      const response = await fetch('/api/login', {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (data.status == 400 && data.message == "User not found.") {
        toast.error(data.message);
        // setUserMessage1(data.message);
        // setshowInvalidAlert(true);
      } else {
        toast.success(data.message);
        setStep(2);
      }

      // Assuming the OTP request is successful:
       // Go to the next step (OTP input)
    };
  
    const submitOtp = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Simulate OTP verification
      console.log('Submitting OTP:', otp);
      
      // Handle OTP verification (you can implement API calls here)

      const response = await fetch('/api/login', {
        method: "POST",
        body: JSON.stringify({
          email: email,
          code: otp,
          tenant_id: 1,//process.env.TENANT_ID,
        }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userProfile", JSON.stringify(data?.user_profile));
        localStorage.setItem(
          "userRoles",
          JSON.stringify(data?.user_profile?.user_roles)
        );
        toast.success(data.message);
        router.push(`/dashboard`);
      } else if (data.status == 401 || data.status == 404) {
        toast.error(data.message);
      }
    };


    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-bgColor3 to-bgColor2 flex flex-row justify-evenly"  >
                          <Image src={login_animated} alt="animated" width={500} height={500} className=''/>

        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md ">

          {step === 1 ? (
            <form onSubmit={requestOtp}>
              <div className='flex items-center justify-center mb-4 '>
              <Image src={logoRing} width={100} height={100} alt="logo" className='rounded-full' />
              </div>

              <div className={`${poppins.className} antialiased font-medium mb-4 text-sm`}>
                <input
                  type="email"
                  className="w-full p-2 mt-1 border border-[#dbdbdb] bg-[#f2f3f5]  rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email id"
                  required
                />
              </div>
              <button
                type="submit"
                className={`${poppins.className} antialiased w-full px-4 py-2 font-medium text-white bg-bgColor2 rounded hover:bg-bgColor1`}
              >
                GET OTC
              </button>
            </form>
          ) : (
            <form onSubmit={submitOtp}>
              <div className='flex items-center justify-center mb-4 '>
                <Image src={logoRing} width={100} height={100} alt="logo" className='rounded-full' />
              </div>
              <div className={`${poppins.className} antialiased font-medium mb-4 text-sm`}>
                <input
                  type="email"
                  className="w-full p-2 mt-1 border border-[#dbdbdb] bg-[#f2f3f5]  rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email id"
                  disabled={true}
                  required
                />
              </div>
              <div className={`${poppins.className} antialiased font-medium mb-4 text-sm`}>
                <input
                  type="text"
                  className="w-full p-2 mt-1 border border-[#dbdbdb] bg-[#f2f3f5]  rounded-md focus:outline-none focus:ring-2 focus:ring-bgColor2"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                  required
                />
              </div>
              <button
                type="submit"
                className={`${poppins.className} antialiased w-full px-4 py-2 font-medium text-white bg-bgColor2 rounded hover:bg-bgColor1`}
              >
                VERIFY OTC
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }