import React from 'react'

function About() {
    return (
        <div className='h-screen bg-backc'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <div className='max-w-[1000px] w-full grid grid-cols-2 '>
                    <div className='sm:text-right pb-8 pl-4'>
                    <p className=' text-white text-4xl font-bold inline border-b-6 border-btnc'> About Me</p>

                </div>
                <div></div>

            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='text-btnc sm:text-right text-4xl font-bold'>
                    <p> Hi I'm Nathanael ravis de vous voir ici. </p>
                </div>
                <div>
                    <p className='text-lg text-gray-300'> Je suis passioné par les nouvelles technologie, être à la pointe de ce qui se fait
                        est super et j'en apprend encore plus. Je suis spécialisé Front-End,Web3 et permet
                        de vous accompagné dans l'évolution de votre projet. Je suis disponible donc n'hesitez
                        pas a me contactez me faire par de vos problématique et nous trouverons une solution adaptez
                        à vos demandes 
                    </p>
                </div>
</div>
            </div>
        </div>
    )
}

export default About;
