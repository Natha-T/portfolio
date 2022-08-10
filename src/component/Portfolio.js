import React from 'react'

function Portfolio() {
    return (
        <div className='w-full md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-white font-bold inline border-b-6 '>Portfolio</p>
                    <p className='py-8 text-gray-300'>Tout les sites réalisé par mes soins</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow[#040c16] group container rounded-md flex justify-center items-center content-div mx-auto'>

                        <div className='opacity-4 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a href='site work'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                                <a href='code github'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                            </div>
                        </div>



                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio;
