import React from 'react'

export default class SearchBar extends React.Component {
    state = { searchTerm: '' }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search</label>
                        {/* Be careful not to invoke the event handler methods by putting (). */}
                        <input 
                            type="text" 
                            value={this.state.searchTerm} 
                            onChange={e => this.setState({searchTerm: e.target.value})} />
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

/*
    The input element was an example of UNCONTROLLED element. 

    Becase we don't know its value. We have to dive into the DOM in order to find out its value. 
    This means the source of truth is inside the HTML document, not inside of our React component.
    
    In React we don't like to store information inside HTML elements.  

    Since we set its value from the state object, React knows its value and this makes it CONTROLLED ELEMENT.
*/
