import React from 'react'
import Loader from './Loader'
import SeasonDisplay from './SeasonDisplay'

export default class GeoLocation extends React.Component{
    /*
            //USING THE COMPONENT STATE

    // CTOR ALWAYS GETS PROPS OBJ
    constructor(props){
        // WE MUST CALL THE BASE CTOR WITH THE PROPS
        super(props)

        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
        this.state = {
            lat: null,
            errorMessage: null
        }
    }

    */

    // To init the state object, we actually don't need to override the ctor.
    // There's a simpler way:
    // Babel transforms this line of code into the verbose one that we did previously.
    state = { lat: null, errorMessage: null }

    componentDidMount(){
        // This lifecycle method is only called for once, after the render method is called.
        // setState() instruction triggers this.

        // By conventional we should componentDidMount to load data, not the constructor.
        window.navigator.geolocation.getCurrentPosition(
            successCallback => {
                this.setState({ 
                    lat: successCallback.coords.latitude,
                    errorMessage: null })
            },
            errorCallback => this.setState({ errorMessage: errorCallback.message})
        )
    }

    render(){
        if(!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            )
        }
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                    <p>Error: { this.state.errorMessage }</p>
                </div>
            )
        }
        return <Loader/>
    }
}

