import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

export const ImageList = (props) => {
    var images = props.images.map(image => {
        return <ImageCard key={image.id} image={image}/>
    })
    return (
        <div>
            <div className="image-list">
                {images}                           
            </div>    
            { images.length === 0 ? null : <h5>{images.length} images found.</h5> }
        </div>
    )
}