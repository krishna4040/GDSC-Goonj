import React from 'react'

const Panel = ({ text }) => {
    return (
        <div className='flex items-center justify-between w-full px-2 text-white bg-dodgerblue'>
            <p>{text}</p>
            <button className='bg-[#D9D9D9] text-blue-600 p-4'>Ok</button>
        </div>
    )
}

export default Panel