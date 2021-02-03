import React, {useState} from 'react'
import Accordion from './Accordion'
import DropdownWidget from './DropdownWidget'
import SearchWidget from './SearchWidget'

const favGames = [
    {
        "id": 1,
        "title": "SimCity 4",
        "content": "Simulation, City Building",
    },
    {
        "id": 2,
        "title": "Red Alert 2",
        "content": "Real Time Strategy"
    },
    {
        "id": 3,
        "title": "Civilization V",
        "content": "Turn Based Strategy"
    },
    {
        "id": 4,
        "title": "Anno 1404",
        "content": "Simulation, City Building, Real Time Strategy"
    },

]

export default () => {
    const [selected, setSelected] = useState(favGames[0]);

    return (
        <div>
            <div className="ui horizontal divider"><h2>Dropdown Widget</h2></div>

            <DropdownWidget 
                options={favGames} 
                selected={selected}                
                selectText="Select a video game" 
                onSelectedChange={setSelected}
            />
            
            <div className="ui horizontal divider"><h2>Search Widget</h2></div>

            <SearchWidget/>
            
            <br/>
            <div className="ui horizontal divider"><h2>Accordion Widget</h2></div>

            <Accordion items={favGames}/>
        </div>
    )
}