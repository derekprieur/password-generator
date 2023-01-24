import React, { useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'

const PasswordCard = ({ password }) => {
    const [isCopied, setIsCopied] = useState(false)
    return (
        <div className='w-full bg-[#24232c] mt-4'>
            <div className='flex justify-between items-center px-4 py-4'>
                <p className='text-[#E6E5EA] text-2xl'>{password === '' ? 'PTx1f5DaFX' : password}</p>
                <div className='flex gap-4'>
                    {isCopied && <p className='text-[#A4FFAF]'>COPIED</p>}
                    <FaRegCopy className='text-[#a4ffaf] text-xl hover:text-white cursor-pointer' onClick={() => setIsCopied(true)} />
                </div>
            </div>
        </div>
    )
}

export default PasswordCard