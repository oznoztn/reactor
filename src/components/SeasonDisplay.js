import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { lat } = props;
    const iconName = season === 'Winter' ? 'snowflake' : 'sun'

    return (
      <div>
          <p>Latitude: { lat }</p>
          <p>Season: { season }</p>
          <i className={`${iconName} icon`}></i>
      </div>
    );
};

export default SeasonDisplay;
