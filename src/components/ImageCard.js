import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { id, description, urls } = this.props.image;

    return (
      <div>
        <a href={urls.full} target="_blank">
          <img key={id} alt={description} src={urls.small}  />
        </a>
      </div>
    );
  }
}

export default ImageCard;
