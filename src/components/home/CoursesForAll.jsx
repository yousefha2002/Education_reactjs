import React from 'react'
import schoolGrades from '../../data/schoolGrades'
import SchoolGrade from './SchoolGrade'

export default function CoursesForAll() {
    return (
        <div className='Container py-10'>
            <div className='text-center mb-10'>
                <h3 className='TitleFont mb-6'>جميع طلبة المدارس من ابتدائي الي ثانوي </h3>
                <p className='paragraphFont'>لان الجميع يستحق ان يكون احد افراد عائلتنا مهم كانت مرحلتك الدراسية نحن هنا عائلتك نفتخر بانضمامك معنا وكونك عضو بالمنصه </p>
            </div>
            <div className='grid md:grid-cols-3 gap-y-8'>
                {
                    schoolGrades.map((item,index)=><SchoolGrade key={index} item={item}/>)
                }
            </div>
        </div>
    )
}
