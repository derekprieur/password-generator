import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Prompt = ({ text, checked, setHasUppercase, setHasLowercase, setHasNumbers, setHasSymbols }) => {

    const handleClick = () => {
        if (text === 'Uppercase Letters') {
            setHasUppercase(!checked)
        } else if (text === 'Lowercase Letters') {
            setHasLowercase(!checked)
        } else if (text === 'Numbers') {
            setHasNumbers(!checked)
        } else if (text === 'Symbols') {
            setHasSymbols(!checked)
        }
    }

    return (
        <div className='text-white flex gap-5 mb-4'>
            {checked ? (
                <BiCheck className='bg-[#A4FFAF] text-[#18171F] w-5 h-5 cursor-pointer' onClick={handleClick} />
            ) : (
                <div className='w-5 h-5 border-2 border-[#E6E5EA] hover:border-[#A4FFAF] cursor-pointer' onClick={handleClick} />
            )}
            <p className='text-base text-[#E6E5EA]'>Include {text}</p>
        </div>
    )
}

export default Prompt