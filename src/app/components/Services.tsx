'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import React from 'react'
import { title } from "process";



const Services = () => {
  return (
    <div id="Services">
      <h1 className="text-4xl font-bold items-center justify-center text-center text-blue-800 underline decoration-blue-800 underline-offset-4">Our Services</h1>
      <CarouselDemo />
      
    </div>
  );
};


export function CarouselDemo() {

  const carouselItems = [
    {
  id:1,
  title: "Food Safety Training and Certification",
   points: [
      "Food Safety Training",
      "HACCP Certification Courses",
      "FSSC 22000 Lead Auditor Training",
       "Train the Trainer Programs",
    
  
  ],
},
  
{
  id:2,
  title: "Food Safety Management System Development",
   points: [
      "Food Safety Management System Implementation",
      "HACCP Plan Development and Review",
      "FSSC 22000 Certification Support",
      "Gap Analysis and Risk Assessment",
      "Compliance Audits and Inspections",
    ],
  },
  {
    id:3,
    title: "Food Safety Auditing and Consulting",
    points:[
      
      "Ongoing Compliance Monitoring",
      "Corrective Action Planning",
      "Supplier Audits and Evaluation",
      "Food Safety Culture Development",
      "Crisis Management and Recall Planning",

    ],
  },
  {
    id:4,
    title: "Food Safety Training and Consultancy",
   points: [
      <h1 className="text-2xl font-bold text-blue-800">Food Safety Training and Consultancy</h1>,
      "Flexible Training Delivery Methods",
      "Interactive Online Workshops",
      "On-Site Consulting and Training Sessions",
      "Remote Support and Advisory Services",

    ],
  },
  ];
  return (
    <Carousel className="w-full max-w-lg justify-center mx-auto">
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
            <Card>
                <CardContent className="flex flex-col items-start justify-center p-6 text-black">
                  <h1 className="text-2xl font-bold text-blue-800">{item.title}</h1>
                  <ul className="list-disc pl-5">
                    {item.points.map((point, index) => (
                      <li key={index} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

            
             
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Services


