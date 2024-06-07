import React from 'react'
import { Link } from 'react-router-dom'

const PromoBanner = () => {
    return (
        <div className='mt-2 py-12 bg-violet-100 px-4 lg:px-24 mb-2'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className='md:w-1/2'>
                    <h2 className="text-4xl font-semibold mb-6 leading-snug">National Book Awards for Fiction List</h2>
                    <Link to='/shop' className='block'><button className='bg-indigo-600 px-6 py-2 mt-2 text-white font-medium hover:bg-black transition-all ease-in duration-300 rounded-md'>Explore More</button></Link>
                </div>
                <div>
                    <img src="src/assets/BookAwards.jpg" className='w-96' />
                </div>
            </div>
        </div >
    )
}

export default PromoBanner
