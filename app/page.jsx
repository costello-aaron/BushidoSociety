'use client'
import React from 'react';
import WelcomeMessage from '@/components/welcome';
import Taskbar from '@/components/taskbar';

export default function Home () {
  return (
    <div className="h-screen" style={{ backgroundImage: "url('/gallery/mustang_flames.jpg')" }}>
      <div className="mx-auto px-8 py-8 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75">
        <div className='text-white font-bold text-center'>
          <div className="my-10"><WelcomeMessage /></div>
          <p className='justify-center '>Share our love and apprieciation for non-domestic cars and the culture that surrounds them.
            <br />We aspire to be a diverse group with styles ranging from drift, street, classic, and VIP.
            <br /> 

          </p>
        </div>
      </div>
    </div>
  )
}
