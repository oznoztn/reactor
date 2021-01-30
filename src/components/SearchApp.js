import React from 'react'
import SearchBar from './SearchBar'

export default class SearchApp extends React.Component {
    onSearchSubmit = (searchTerm) => {
        console.log("The searchTerm caught at SearchApp level is: " + searchTerm)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}