import React from 'react'
import Intro from '../components/home/Intro'
import Services from '../components/home/Services'
import MechanismWork from '../components/home/MechanismWork'
import CoursesForAll from '../components/home/CoursesForAll'
import OurTeam from '../components/home/OurTeam'
import AboutUs from '../components/home/AboutUs'

    export default function Home() {
    return (
        <>
            <Intro/>
            <Services/>
            <MechanismWork/>
            <CoursesForAll/>
            <OurTeam/>
            <AboutUs/>
        </>
    )
}
