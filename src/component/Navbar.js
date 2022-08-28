import React from 'react'

import { useState } from "react"; // import state



function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    

    return (
         <div className="flex items-center justify-between  py-8 ">
              <a className='ml-6' href="/">
               <p>logo </p>
              </a>
              <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                  <div
                    className="HAMBURGER-ICON space-y-2 mr-6"
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                  </div>
        
                  <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                    <div
                      className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                      onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                      <svg
                        className="h-8 w-8 text-gray-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN text-2xl my-8 font-bold text-white flex flex-col items-center justify-between min-h-[250px]">
                      <li className="  ">
                        <a href="/">About Me</a>
                      </li>
                      <li className="  ">
                        <a href="/">Stacks</a>
                      </li>
                      <li className="  ">
                        <a href="/">Portfolio</a>
                      </li>
                      <li className=" ">
                        <a href="/">Contact</a>
                      </li>
                    </ul>
                  </div>
                </section>
        
                <ul className="DESKTOP-MENU  font-bold text-white  hidden space-x-40  mr-16 lg:flex ">
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Stacks</a>
                  </li>
                  <li>
                    <a href="/">Portfolio</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </nav>
              <style>{`
              .hideMenuNav {
                display: none;
              }
              .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: #082A3A;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
              }
            `}</style>




<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Linkedin 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Github 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#6fc2b0]'>
           <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/' > 
              
              Email 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/' >
              Resume 
            </a>
          </li>
        </ul>
      </div>









            </div>
    )
}

export default Navbar
