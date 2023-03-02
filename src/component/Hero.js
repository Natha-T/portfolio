import React from 'react'

function Hero() {
    return (
        <div className='w-full h-screen  flex '>
            <div className='mx-auto px-8 flex flex-col justify-center h-full'>
               <p className='text-gray-300 font-bold font-mono text-md'>Salut, moi c'est </p>
               <h1 className='text-6xl sm:text-7xl font-bold text-black animate-pulse '> Nathanaël.T</h1>
               <h2 className='text-4xl sm:text-7xl font-bold text-btnc'> <span className='animate-pulse'>Front End Développeur</span></h2>
               <p className='py-4 font-mono text-lg max-w-[700px] text-gray-300'> 
               J'ai découvert le développement web à l'issue d'une expérience WordPress 
               en parallèle de cela, je suis tombé sur la blockchain et son écosystème et j'ai tout de suite adhéré.
               Depuis, j'ai décidé de me former en autodidacte en tant que
               développeur web
                </p> 
 
                <a href="mailto:natha.trepon@gmail.com" className='text-white w-40 border-2 inline  px-6 py-3 my-2 flex items-center '> Contactez Moi</a>
           
            </div>

       

        </div>

    )
}

export default Hero;
