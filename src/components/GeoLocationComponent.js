import React from 'react'

export default class GeoLocation extends React.Component{
    // CTOR ALWAYS GETS PROPS OBJ
    constructor(props){
        // WE MUST CALL THE BASE CTOR WITH THE PROPS
        super(props)

        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
        this.state = {
            lat: null,
            errorMessage: null
        }

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
                    <p>Latitude: { this.state.lat }</p>
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
        return <div>Loading...</div>
    }
}

