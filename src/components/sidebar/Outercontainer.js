import React from 'react'
import Innercontainer from './Innercontainer';

const Outercontainer = () => {
  const containerStyle = {
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
  };
  return (
    <div className="flex flex-col items-start justify-start"
    style={containerStyle}>
      <Innercontainer />
    </div>
  )
}

export default Outercontainer