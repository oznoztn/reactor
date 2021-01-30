import React from 'react'

export const ImageList = (props) => {
    var images = props.images.map(image => {
        return (
            <a href={image.urls.regular} target="_blank">
                <img key={image.id} src={image.urls.small} alt={image.description} />
            </a>
        )
    })
    return (
        <div>
            <div>
                {images}                           
            </div>    
            { images.length == 0 ? null : <h5>{images.length} images found.</h5> }
        </div>
    )
}