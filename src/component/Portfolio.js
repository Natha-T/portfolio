import React from 'react'
import cryptopayapp from '../img/cryptopayapp.png'
import eyeseekfund from '../img/eyeseekfund.png'
import nftmint from '../img/nftmint.png'
import dashb from '../img/dashb.png'
import mern from '../img/mern.png'


function Portfolio() {
    return (
        <div className='   mt-56  w-full md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-white font-bold inline border-b-6 '>Portfolio</p>
                    <p className='py-8 text-gray-300'>Tout les sites réalisé par mes soins</p>
                </div>


                <div className='items-center h-full grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
           

            
                <div
                        style={{ backgroundImage: `url(${cryptopayapp})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        CrytoPayApp
      </span>
      <div className="pt-8 text-center ">

      
      <a href="https://github.com/Natha-T/dashboard" >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
   
        <a href="https://appcryptopay.web.app">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
      
    </div>
  </div>




  <div
                        style={{ backgroundImage: `url(${eyeseekfund})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
       Decentralized CrowndFuding Platform
      </span>
      <div className="pt-8 text-center ">
      
        <a href="https://www.fund.eyeseek.org" >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
      
    </div>
  </div>


  <div
                        style={{ backgroundImage: `url(${dashb})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        Dashboard Crypto (not update)
      </span>
      <div className="pt-8 text-center ">
    
        <a href="https://github.com/Natha-T/dashboard" >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
     
      </div>
      
    </div>
  </div>




  <div
                        style={{ backgroundImage: `url(${mern})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        CRUD user with MERN (live soon)
      </span>
      <div className="pt-8 text-center ">
    
        <a href="https://github.com/Natha-T/dashboard">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
     
      </div>
      
    </div>
  </div>


  <div
                        style={{ backgroundImage: `url(${nftmint})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        NFT Mint
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href="https://github.com/Natha-T/nftmint" >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href="https://nft-mint-n.netlify.app" >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
      
    </div>
  </div>

                </div>
            </div>    
        </div>
    )
}

export default Portfolio;
