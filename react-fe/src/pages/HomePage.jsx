import React from 'react'
import Header from '../components/Header.jsx'
import HomeText from '../components/HomeText.jsx'
import HomeCard from '../components/HomeCard.jsx'
import HomeFooter from '../components/HomeFooter.jsx'

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <HomeText />
            <HomeCard />
        </div>
    )
}

export default HomePage
