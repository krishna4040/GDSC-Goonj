import React from 'react'
import circle from '../../assets/shapes/circle.svg'
import circle2 from '../../assets/shapes/circle-2.svg'
import ellipse from '../../assets/shapes/ellipse.svg'
import ellipse2 from '../../assets/shapes/ellipse-2.svg'
import squarePlate from '../../assets/shapes/square-bg.svg'


const Hero = ({ children, text }) => {
    return (
        <section className='mt-5 lg:mt-0'>
            <div className='flex items-start justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img src={squarePlate} alt="plate" height={282} width={287} />
                    <img src={circle} alt="circle" width={60} />
                </div>
                {children}
                <div className='relative'>
                    <img src={squarePlate} alt="plate" width={282} height={282} />
                    <img src={ellipse2} alt="ellipse" width={60} className='absolute top-10 left-20' />
                </div>
            </div>
            <div>
                <div className=''>
                    <div className='relative flex justify-center'>
                        <img src={squarePlate} alt="" height={400} width={400} />
                        <img src={squarePlate} alt="" height={400} width={400} />
                        <img src={ellipse} alt="ellipse" width={60} className='absolute top-0 left-80' />
                        <img src={circle2} alt="circle" width={60} className='absolute top-10 right-64' />
                        <p className='absolute w-full text-5xl font-bold top-[calc(50%-30px)] left-[calc(50%-180px)] text-left'>{text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero