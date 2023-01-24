import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Prompt = ({ text, checked }) => {
    return (
        <div className='text-white flex gap-5 mb-4'>
            {checked ? (
                <BiCheck className='bg-[#A4FFAF] text-[#18171F] w-5 h-5 cursor-pointer' />
            ) : (
                <div className='w-5 h-5 border-2 border-[#E6E5EA] hover:border-[#A4FFAF] cursor-pointer' />
            )}
            <p className='text-base text-[#E6E5EA]'>Include {text}</p>
        </div>
    )
}

export default Prompt