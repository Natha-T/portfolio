import React from 'react'

function Hero() {
    return (
        <div className='w-full h-screen  flex '>
            <div className='mx-auto px-8 flex flex-col justify-center h-full'>
               <p className='text-gray-300'>Bonjour, mon nom est </p>
               <h1 className='text-6xl sm:text-7xl font-bold text-black animate-pulse '> Nathanaël</h1>
               <h2 className='text-4xl sm:text-7xl font-bold text-btnc'> Je suis un <span className='animate-pulse'>Front End Developer</span></h2>
               <p className='py-4 text-lg max-w-[700px] text-gray-300'> Je suis un Developer Front-End debutant qui se dirige vers le Web 3.0, avec peux d'experience
               et plein de choses a faire partager.  </p> 
 
                <a href="mailto:natha.trepon@gmail.com" className='text-white w-36 border-2 inline  px-6 py-3 my-2 flex items-center '> Contact Me</a>
           
            </div>

       

        </div>

    )
}

export default Hero;
