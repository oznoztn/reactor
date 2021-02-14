import React from "react";

const Loader = (props) => {
  return (
    <div>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

// Much better approach than {props.message || "Loading" }
Loader.defaultProps = {
  message: "Loading..",
};

export default Loader;
