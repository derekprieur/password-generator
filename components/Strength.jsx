import React from 'react'

const Strength = () => {
    return (
        <div className='text-[#E6E5EA] mt-8'>
            <div className='px-4 bg-[#18171F] py-4 flex items-center justify-between'>
                <p className='text-[#817D92] text-base'>STRENGTH</p>
                <div className='flex gap-4 items-center'>
                    <p className='text-lg'>MEDIUM</p>
                    <div className='flex gap-2'>
                        <div className='w-[10px] h-7 bg-[#F8CD65]' />
                        <div className='w-[10px] h-7 bg-[#F8CD65]' />
                        <div className='w-[10px] h-7 bg-[#F8CD65]' />
                        <div className='w-[10px] h-7 border-2 border-[#E6E5EA]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strength