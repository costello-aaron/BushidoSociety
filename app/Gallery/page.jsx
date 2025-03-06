'use client'
import React from 'react';
import Gallerybox from '@/components/gallerybox';
import EmblaCarousel from '@/components/EmblaCarousel';
import '../../css/embla.css';
const OPTIONS = { loop : true}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Gallery () {
  return (
    <div className="font-inter mx-auto min-h-screen w-screen flex flex-col items-center justify-center"> 
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      <Gallerybox/>
    </div>
  )
}
