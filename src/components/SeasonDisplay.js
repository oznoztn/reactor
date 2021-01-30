import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
    winter: {
        text: "It's cold!",
        iconName: "snowflake"
    },
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {lat} = props;
    const {text, iconName} = seasonConfig[season]

    return (
      <div>
          <p>Latitude: { lat }</p>
          <p>Season: { season }</p>
          <p>{ text }</p>
          <i className={`${iconName} icon`}></i>
      </div>
    );
};

export default SeasonDisplay;
