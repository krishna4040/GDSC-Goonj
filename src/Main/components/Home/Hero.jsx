import React from 'react'
import GOONJ from '../../assets/GOONJ.svg'
import Cross from '../../assets/cross.svg'
import GDSC from '../../assets/GDSC.svg'
import circle from '../../assets/shapes/circle.svg'
import circle2 from '../../assets/shapes/circle-2.svg'
import ellipse from '../../assets/shapes/ellipse.svg'
import ellipse2 from '../../assets/shapes/ellipse-2.svg'
import squarePlate from '../../assets/shapes/square-bg.svg'


const Hero = () => {
    return (
        <section>
            <div className='flex items-start justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img src={squarePlate} alt="plate" height={282} width={287} />
                    <img src={circle} alt="circle" width={60} />
                </div>
                <div className='flex items-center justify-center gap-28 mt-28'>
                    <img src={GDSC} alt="GDSC" height={100} width={200} />
                    <img src={Cross} alt="Cross" height={50} width={50} />
                    <img src={GOONJ} alt="GOONJ" height={150} width={200} />
                </div>
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
                        <p className='absolute w-full text-5xl font-bold top-[calc(50%-30px)] left-[calc(50%-180px)]'>13, 14 and 15 March</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero