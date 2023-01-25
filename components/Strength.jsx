import React from 'react'

const colors = {
    'too weak!': 'bg-[#F64A4A]',
    'weak': 'bg-[#FB7C58]',
    'medium': 'bg-[#F8CD65]',
    'strong': 'bg-[#A4FFAF]'
}

const Strength = ({ strength }) => {
    let color = colors[strength.toLowerCase()]
    console.log(strength.toLowerCase())
    return (
        <div className='text-[#E6E5EA] mt-8'>
            <div className='px-4 bg-[#18171F] py-4 flex items-center justify-between'>
                <p className='text-[#817D92] text-base uppercase'>STRENGTH</p>
                <div className='flex gap-4 items-center'>
                    <p className='text-lg uppercase'>{strength}</p>
                    {strength === 'Too Weak!' ?
                        <div className='flex gap-2'>
                            <div className={`w-[10px] h-7 ${color}`} />
                            <div className={`w-[10px] h-7 border-2 border-[#E6E5EA]`} />
                            <div className={`w-[10px] h-7 border-2 border-[#E6E5EA]`} />
                            <div className='w-[10px] h-7 border-2 border-[#E6E5EA]' />
                        </div>
                        : strength === 'Weak' ?
                            <div className='flex gap-2'>
                                <div className={`w-[10px] h-7 ${color}`} />
                                <div className={`w-[10px] h-7 ${color}`} />
                                <div className={`w-[10px] h-7 border-2 border-[#E6E5EA]`} />
                                <div className='w-[10px] h-7 border-2 border-[#E6E5EA]' />
                            </div>
                            : strength === 'Medium' ?
                                <div className='flex gap-2'>
                                    <div className={`w-[10px] h-7 ${color}`} />
                                    <div className={`w-[10px] h-7 ${color}`} />
                                    <div className={`w-[10px] h-7 ${color}`} />
                                    <div className='w-[10px] h-7 border-2 border-[#E6E5EA]' />
                                </div>
                                :
                                <div className='flex gap-2'>
                                    <div className={`w-[10px] h-7 ${color}`} />
                                    <div className={`w-[10px] h-7 ${color}`} />
                                    <div className={`w-[10px] h-7 ${color}`} />
                                    <div className={`w-[10px] h-7 ${color}`} />
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Strength