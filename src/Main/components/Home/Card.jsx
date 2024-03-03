import React from 'react'

const Card = ({image, title, description}) => {
    return (
        <div className='flex items-center justify-center lg:gap-28 gap-16 shadow-xl lg:min-w-[800px] lg:min-h-[400px] min-w-[500px] min-h-[300px] px-4 py-2'>
            <div className='lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full border'>
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