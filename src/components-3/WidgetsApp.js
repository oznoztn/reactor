import React from 'react'
import Accordion from './Accordion'
import SearchWidget from './SearchWidget'

const favGames = [
    {
        "title": "SimCity 4",
        "content": "Simulation, City Building"
    },
    {
        "title": "Red Alert 2",
        "content": "Real Time Strategy"
    },
    {
        "title": "Civilization V",
        "content": "Turn Based Strategy"
    },
    {
        "title": "Anno 1404",
        "content": "Simulation, City Building, Real Time Strategy"
    },

]

export default () => {
    return (
        <div>
            <SearchWidget/>
            
            <br/>
            <div className="ui horizontal divider"><h2>Accordion Widget</h2></div>

            <Accordion items={favGames}/>
        </div>
    )
}