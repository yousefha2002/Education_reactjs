import React from 'react'
import ServiceLayout from '../../components/ServiceLayout/ServiceLayout'
import Categories from '../../data/Categories'
import { useParams } from 'react-router'
import NotFound from '../reusableUi/NotFound'
import GridSystem from '../reusableUi/GridSystem'

export default function CategoryServiceItems({items,ChildBox,title,categoryPath}) {
    const {id} = useParams()
    const itemsbycategory = items.filter(item=>item.category===parseInt(id))
    return (
        <ServiceLayout title={title} items={Categories} categoryPath={categoryPath}> 
            {
                itemsbycategory.length>0
                ?
                <GridSystem Child={ChildBox} items={itemsbycategory}/>
                :
                <NotFound/>            
            }
        </ServiceLayout>
    )
}