import React from 'react'
import Accordion from './Accordion'

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

class AccordionApp extends React.Component{
    render(){
        return (
            <div>
                <Accordion items={favGames}/>
            </div>
        )
    }
}

export default AccordionApp