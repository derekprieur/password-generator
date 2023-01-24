import React, { useEffect, useState } from 'react'
import { Prompt, Slider, Strength } from '../components'
import { BsArrowRightShort } from 'react-icons/bs'
import { chars } from '../utils'

const InputCard = ({ setPassword }) => {
    const [passwordLength, setPasswordLength] = useState(10)
    const [hasUppercase, setHasUppercase] = useState(true)
    const [hasLowercase, setHasLowercase] = useState(true)
    const [hasNumbers, setHasNumbers] = useState(true)
    const [hasSymbols, setHasSymbols] = useState(true)
    const [availableCharacters, setAvailableCharacters] = useState(chars)

    const updateAvailableCharacters = () => {
        let characters = ''
        if (hasUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (hasLowercase) characters += 'abcdefghijklmnopqrstuvwxyz'
        if (hasNumbers) characters += '0123456789'
        if (hasSymbols) characters += '!@#$%^&*()_+~`|}{[]\:;?><,./-='
        setAvailableCharacters(characters)
    }

    const generatePassword = () => {
        let password = ''
        for (let i = 0; i < passwordLength; i++) {
            password += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
        }
        setPassword(password)
    }

    useEffect(() => {
        updateAvailableCharacters()
    }, [hasUppercase, hasLowercase, hasNumbers, hasSymbols])


    return (
        <div className='w-full bg-[#24232c] mt-4 px-4 py-4'>
            <div className='flex justify-between items-center'>
                <p className='text-[#E6E5EA] text-base'>Character Length</p>
                <p className='text-[#a4ffaf] text-2xl'>10</p>
            </div>
            <Slider />
            <Prompt text='Uppercase Letters' checked={hasUppercase} setHasUppercase={setHasUppercase} />
            <Prompt text='Lowercase Letters' checked={hasLowercase} setHasLowercase={setHasLowercase} />
            <Prompt text='Numbers' checked={hasNumbers} setHasNumbers={setHasNumbers} />
            <Prompt text='Symbols' checked={hasSymbols} setHasSymbols={setHasSymbols} />
            <Strength />
            <button className='bg-[#A4FFAF] flex items-center justify-center w-full py-[18px] gap-2 mt-[34px] hover:bg-transparent hover:border-2 hover:border-[#A4FFAF] hover:text-[#A4FFAF]' onClick={generatePassword}>GENERATE <BsArrowRightShort className='text-2xl' /> </button>
        </div>
    )
}

export default InputCard