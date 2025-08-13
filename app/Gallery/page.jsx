'use client'
import React from 'react';
import Gallerybox from '@/components/gallerybox';
import '../../css/embla.css';

export default function Gallery () {
  return (
    <div className="font-inter mx-auto min-h-screen w-screen flex flex-col items-center justify-center"> 
      <Gallerybox/>
    </div>
  )
}
