import React from 'react'

const Slider = () => {
    return (
        <div className='relative mb-8'>
            <input type='range' min='0' max='20' value='10' step='1' className='w-full mt-2 h-2 appearance-none bg-[#18171f] cursor-pointer slider' onChange={() => { }} />
        </div>
    )
}

export default Slider