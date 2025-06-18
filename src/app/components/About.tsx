
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
      <Image
      className="object-cover object-center rounded transition duration-300 ease-in-out transform hover:scale-105"
      src="https://purdueglobalwriting.center/wp-content/uploads/2020/04/gettyimages-677892870.jpg"
      alt="hero"
      width={500}
      height={500}
     sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 33vw"
      style={{ width: '100%', height: 'auto', maxWidth: 400 }}
      priority
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800 underline decoration-blue-800 underline-offset-4">
        Why Choose Us?
        <br className="hidden lg:inline-block" />
        
      </h1>
      <p className="mb-8 leading-relaxed">
      At Global Food Safety Standards, we
 are committed to delivering
 unparalleled expertise and support in
 food safety training and consultancy.
 Our team comprises seasoned
 professionals with extensive
 experience in food safety, ensuring
 you receive the highest quality
 training and advice
 Dedicated to helping you achieve the
 highest standards of food safety and
 quality, we enhance your business’s
 reputation and customer trust.
 Choose Global Food Safety Standards
 for a partner that prioritizes your
 success and safety.
      </p>
      <div className="flex justify-center">
  

        
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 transition duration-300 ease-in-out rounded text-lg">
          <a href="#Services">Services</a>
        </button>
        
        
        
        <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-950 rounded text-lg transition duration-300 ease-in-out">
          <a href="#Contact">Contact Us</a>
        </button>
      </div>
      
    </div>
    
  </div>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            Comprehensive Services
            </h2>
            <p className="leading-relaxed">
            We offer a wide range of
 services, from tailored
 training sessions to full
 implementation support
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            Customized Solutions
            </h2>
            <p className="leading-relaxed">
            We understand that every
 business is unique, and we
 provide customized solutions to
 meet your specific food safety
 requirements.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx={12} cy={5} r={3} />
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            Up-to-Date Knowledge
            </h2>
            <p className="leading-relaxed">
            We stay with the latest food
 safety regulations and industry
 best practices, ensuring you are
 always with the most recent
 standards..
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            Tailored Solutions
            </h2>
            <p className="leading-relaxed">
            We provide customized
 training and consultancy
 services designed to meet the
 unique needs of each client.
            </p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            Up-to-Date Expertise
            </h2>
            <p className="leading-relaxed">
            Our team stays current with
 the latest food safety
 regulations and industry
 advancements, ensuring that
 our clients receive the most
 relevant and effective guidance
            </p>
          </div>
        </div>
      </div>
      <Image
        className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-3"
        src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg"
        alt="step"
        height={500}
        width={500}
      />
    </div>
  </div>
</section>

  
</section>


    </div>
  )
}

export default About
