import React from 'react'
import unsplash from '../api/unsplash'
import { ImageList } from './ImageList'
import SearchBar from './SearchBar'

export default class SearchApp extends React.Component {
    state = { images: [] }
    
    onSearchSubmit = async (searchTerm) => {
        console.log("The searchTerm caught at SearchApp level is: " + searchTerm)

        const response = await unsplash.get('/search/photos', {
            params: { 
                query: searchTerm
            }
        })
        
        console.log(response.data.results)

        this.setState({images: response.data.results})
    }

    render() {
        return (
            <>
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                </div>
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <ImageList images={this.state.images}/>
                </div>
            </>
        )
    }
}