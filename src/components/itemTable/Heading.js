import React from 'react'
import SearchBar from './SearchBar';

const Heading = () => {
  const HeadingStyle = {
    width: "248px",
    flexShrink: "0",
  };
  
  return (
    <div
      className="w-[344px] flex flex-row items-start justify-start"
      style={HeadingStyle}
    >
      <SearchBar
        text="Order ID, phone or a name..."
      />
    </div>
  );
};

export default Heading