import React from 'react'

const Card = ({image, title, description}) => {
    return (
        <div className='flex items-center justify-center gap-3 shadow-xl'>
            <div className='w-[500px] h-[500px] rounded-full'>
                <img src={image} alt="image" className='w-full' />
            </div>
            <div>
                <p className='text-xl font-bold text-lightskyblue'>{title}</p>
                {description && <p className='text-xl text-lightskyblue'>{description}</p>}
            </div>
        </div>
    )
}

export default Card