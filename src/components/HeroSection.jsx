import React from 'react';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';


function HeroSection() {
	return (
    
		<div id="hero" className="flex items-center justify-center flex-col py-5">
      <div><img src={logo1} alt="Logo" className='block dark:hidden'  /></div>
      <div><img src={logo2} alt="Logo" className='hidden dark:block' /></div>
			<div className="text-center ">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-orange-500 dark:text-orange-500 font-inter font-extrabold">
					CYATT
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					One-Stop IT Solutions{' '}
				</p>
			</div>
			<section className="text-gray-300 dark:text-gray-700 body-font relative">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-600 dark:text-gray-300">
              Get in touch with Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-neutral-300 dark:bg-neutral-800  rounded  focus:text-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-neutral-300 dark:bg-neutral-800 rounded  focus:text-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-neutral-300 dark:bg-neutral-800 rounded  focus:text-orange-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-orange-500 hover:bg-black rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
		</div>
		
	);
}

export default HeroSection;
