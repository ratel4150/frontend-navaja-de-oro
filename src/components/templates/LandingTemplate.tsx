// src\components\templates\LandingTemplate.tsx
'use client';
import React from 'react'
import Hero from '../organisms/Hero'
import OurService from '../organisms/OurService'
import BestSellingProducts from '../organisms/BestSellingProducts';

function LandingTemplate() {
  return (
    <>
    <Hero/>
    <OurService/>
    <BestSellingProducts/>
    </>
  )
}

export default LandingTemplate