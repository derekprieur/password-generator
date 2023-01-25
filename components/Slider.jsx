import React from 'react'

const Slider = ({ setPasswordLength }) => {

    const handleChange = (e) => {
        setPasswordLength(e.target.value)
    }

    return (
        <div className='relative mb-8'>
            <input type='range' min='0' max='20' className='w-full mt-2 h-2 appearance-none bg-[#18171f] cursor-pointer slider' onChange={handleChange} />
        </div>
    )
}

export default Slider