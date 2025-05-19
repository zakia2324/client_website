import React from 'react';
import Image from 'next/image';


const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center  mb-4">
        <Image src="/clientlogo.jpg"alt="logo"height={200}width={200}/>
      </h1>
      
    </div>
  )
}

export default Header
