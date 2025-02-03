import React from 'react'

const HomeClient = () => {
    return (
        <div className='bg-white/70'>
            <section className='min-h-full max-w-6xl mx-auto text-black pt-10 '>
                <div className='flex flex-col gap-16'>
                    <div className='font-bold text-black text-center text-6xl text-wrap flex flex-col items-center justify-center'>
                        <h1>Hope</h1>
                        <h1>Horizon</h1>
                    </div>
                    <div className=' flex flex-col gap-7'>

                        <div className='w-full text-center flex flex-col gap-4'>
                            <p className='font-bold text-black text-center text-4xl'>Our Charity Provides Free Education to Vulnerable Children and Many More.</p>
                            <p className=' font-semibold text-black text-center text-3xl'>Spark Hope. Donate Today!</p>
                        </div>
                        <div className='w-full text-center'>
                            <button className='bg-purple-500 text-white px-12 py-6 font-bold rounded-xl'>DONATE</button>
                        </div>
                        <div className='w-full text-center'>
                            <p className='font-semibold text-black text-center text-3xl'>
                                100% OF DONATIONS GO TO THE PROGRAMS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeClient;