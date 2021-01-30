import React from 'react'

const Loader = (props) => {
    return (
        <div>
            <div className="ui active inverted dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    )
}

export default Loader