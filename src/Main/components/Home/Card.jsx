import React from 'react'

const Card = ({image, title, description}) => {
    return (
        <div className='flex items-center justify-center gap-28 shadow-xl min-w-[800px] min-h-[400px] px-4 py-2'>
            <div className='w-[300px] h-[300px] rounded-full border'>
                <img src={image} alt="image" className='w-full' />
            </div>
            <div className=''>
                <p className='text-xl font-bold text-lightskyblue'>{title}</p>
                {description && <p className='text-xl text-lightskyblue'>{description}</p>}
            </div>
        </div>
    )
}

export default Card