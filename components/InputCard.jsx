import React, { useState } from 'react'
import { Prompt, Slider, Strength } from '../components'
import { BsArrowRightShort } from 'react-icons/bs'
import { chars } from '../utils'

const InputCard = ({ setPassword }) => {
    const [passwordLength, setPasswordLength] = useState(10)
    const generatePassword = () => {
        // generate password 10 characters long
        let password = ''
        for (let i = 0; i < passwordLength; i++) {
            password += chars[Math.floor(Math.random() * chars.length)]
        }
        setPassword(password)
    }

    return (
        <div className='w-full bg-[#24232c] mt-4 px-4 py-4'>
            <div className='flex justify-between items-center'>
                <p className='text-[#E6E5EA] text-base'>Character Length</p>
                <p className='text-[#a4ffaf] text-2xl'>10</p>
            </div>
            <Slider />
            <Prompt text='Uppercase Letters' checked />
            <Prompt text='Lowercase Letters' checked />
            <Prompt text='Numbers' checked />
            <Prompt text='Symbols' />
            <Strength />
            <button className='bg-[#A4FFAF] flex items-center justify-center w-full py-[18px] gap-2 mt-[34px] hover:bg-transparent hover:border-2 hover:border-[#A4FFAF] hover:text-[#A4FFAF]' onClick={generatePassword}>GENERATE <BsArrowRightShort className='text-2xl' /> </button>
        </div>
    )
}

export default InputCard