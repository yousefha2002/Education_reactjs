import React from 'react'
import PrimaryButton from '../reusableUi/PrimaryLink'

export default function Intro() {
    return (
        <div style={{ background: 'linear-gradient(to bottom, #C3E1E8, #FFFFFF00)' }}>
            <div className='Container py-10'>
                <div className='flex justify-between items-center'>
                    <div className='w-full md:w-[44%] xl:w-[45%]'>
                        <h3 className='HeadingFont mb-4'>اطمح، تعلّم، تقدّم.</h3>
                        <p className='paragraphFont mb-6 lg:w-[80%] text-justify'>
                            شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاهدة او الاطلاع علي التفاصيل وياخذ. 
                        </p>
                        <PrimaryButton link="/" content="إنضم إلينا"/>
                    </div>
                    <div className='md:w-[54%] lg:w-[45%] md:flex hidden'>
                        <img src={'/images/intro.png'} alt='intro'/>
                    </div>
                </div>
            </div>
        </div>
    )
}