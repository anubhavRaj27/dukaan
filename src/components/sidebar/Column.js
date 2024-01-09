import React from 'react';

const Column = ({ Icon, text, FlexShrink }) => {
  const columnStyle = {
    flexShrink: FlexShrink,
  };

  return (
    <div
      className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px] text-left text-sm text-black-100 font-sub-title-medium"
      style={columnStyle}
    >
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-80"
        alt=""
        src={Icon}

      />
      <div className="relative leading-[20px] font-medium opacity-[0.8]">
        {text}
      </div>
    </div>
  );
};

export default Column;
