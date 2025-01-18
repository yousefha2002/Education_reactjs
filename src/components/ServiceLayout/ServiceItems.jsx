import React from 'react'
import ServiceLayout from './ServiceLayout'
import categories from '../../data/Categories'
import GridSystem from '../reusableUi/GridSystem'

export default function ServiceItems({title,categoryPath,childBox,items}) {
    return (
        <ServiceLayout title={title} items={categories} categoryPath={categoryPath}>
            <div>
                {
                    categories.map(category=>
                    {
                        return(
                                <div className='py-6' key={category.id}>
                                    <h3 className='RegularFont mb-4'>{category.title}</h3>
                                    <GridSystem Child={childBox} items={items.filter(item=>item.category===category.id).slice(0,3)}/>
                                </div>
                            )
                    }
                    )
                }
            </div>
        </ServiceLayout>
    )
}