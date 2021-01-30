import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text"/>
                    </div>
                    
                    {/* <button className="ui button" type="submit">Submit</button> */}
                </form>
            </div>
        )
    }
}