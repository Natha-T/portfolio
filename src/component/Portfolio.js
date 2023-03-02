import React from 'react'
import cryptopayapp from '../img/cryptopayapp.png'
import eyeseekfund from '../img/eyeseekfund.png'
import nftmint from '../img/nftmint.png'
import dashb from '../img/dashb.png'
import mern from '../img/mern.png'
import mernapp from '../img/mernapp.png'

function Portfolio() {
    return (
        <div className='   mt-56  w-full md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-white font-bold inline border-b-6 '>Portfolio</p>
                    <p className='py-8 font-bold font-mono text-md text-gray-300'>Tout les sites que j'ai réalisé : </p>
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
        E-Commerce App (Firebase)
      </span>
      <div className="pt-8 text-center ">

   
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
    <div className="opacity-0 group-hover:opacity-100 mt-2">
      <div className='grid'>
      <span className=" text-lg font bold text-white tracking-wider ">
      Hackaton Moralis and Google:
      </span>
      <span className=" text-lg font bold text-white">
      Decentralized CrowndFuding Platform
      </span>
        </div>
    <div className='grid'>
       <span className="text-sm font bold text-white">
        Polygon Winner : Best UI/UX
        
      </span>
      <span className="text-sm font bold text-white"> 
        BNBChain 3rd place : Best traditional finance application
      </span>
      <a className="text-sm font bold text-white"  href='https://moralis.io/google-hackathon/winners/#winners'> 
      Link : https://moralis.io/google-hackathon/winners/#winners
      </a>
     
    </div>
      <div className=" text-center ">
        
        <a href="https://www.fund.eyeseek.org" >
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>

        <a href="https://github.com/Natha-T/FundingMVP" >
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
                        style={{ backgroundImage: `url(${dashb})` }}
             className="group rounded-md 
             flex justify-center text-center items-center  content-div
               "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        Dashboard Crypto (ETH MAINNET ONLY)
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

        <a href="https://wallet-tracket.netlify.app/" >
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
                        style={{ backgroundImage: `url(${mernapp})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
    <div className='grid'>
      <span className="text-lg mt-8 font bold text-white tracking-wider ">
        E-Commerce App (M.E.R.N) 
        <span></span>
      </span>
      <span className="text-md font bold text-white">
        Payment with Stripe,
      </span>
      <span className="text-md font bold text-white">
   
       (Accept Crypto Payment soon...)
      </span>
      </div>
      <div className="pt-8 text-center ">
    
      <a href="https://github.com/Natha-T/MERN-Shop">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code 
          </button>
        </a>
      
        <a href="https://foodappfront.onrender.com/">
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
                        style={{ backgroundImage: `url(${nftmint})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        NFT Mint (thirdweb)
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
