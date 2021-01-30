import React from 'react'

export default class GeoLocation extends React.Component{
    // CTOR ALWAYS GETS PROPS OBJ
    constructor(props){
        // WE MUST CALL THE BASE CTOR WITH THE PROPS
        super(props)

        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
        this.state = {
            latitude: null,
            altitude: null,
            errorMessage: null
        }

        window.navigator.geolocation.getCurrentPosition(
            successCallback => this.setState({ latitude: successCallback.coords.latitude }),
            errorCallback => this.setState({ errorMessage: errorCallback.message})
        )
    }

    render(){
        return (
            <div>
                <p>Latitude: { this.state.latitude }</p>
                <p>Error: { this.state.errorMessage }</p>
            </div>
        )
    }
}

