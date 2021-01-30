import React from 'react'

export default class SearchBar extends React.Component {
    onInputChange(e){
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search</label>
                        {/* Be careful not to invoke the event handler methods by putting (). */}
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                    
                    {/* <button className="ui button" type="submit">Submit</button> */}
                </form>
            </div>
        )
    }
}

/*
    Handling events:
        We can pass a callback function:
            1) onChange={this.onInputChange}
        
        We can pass an arrow func directly to the prop itself:
            2) onChange={event => console.log(event.target.value)}
*/