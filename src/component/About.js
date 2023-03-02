import React from 'react'

function About() {
    return (
        <div className='h-screen bg-backc'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <div className='max-w-[1000px] w-full grid grid-col '>
                    <div className='pb-8 pl-4'>
                    <p className=' text-white text-4xl font-bold inline border-b-6 border-btnc'>À propos de moi</p>

                </div>
             

            </div>
            <div className='max-w-[1000px] w-full grid  gap-8 px-4'>
              
                <div>
                    <p className='text-lg font-mono text-gray-300'> 
                       Après un parcours varié en expérience professionnelle j'ai décidé de me reconvertir en tant que développeur web.
                        Ce choix est pour moi naturel et me permet de voir mon avenir avec plus d'ambition. Cependant je ne regrette pas mon parcours 
                       professionnel qui m'a apporté maturité, conscience professionnelle et autonomie. En approfondissant mes recherches sur la blockchain
                       j'ai compris le rôle de la décentralisation et les problèmes qu'elle peut résoudre.
                        Depuis j'ai décidé de faire partie de ceux qui construisent ce monde.
                    </p>
                </div>
</div>
            </div>
        </div>
    )
}

export default About;
