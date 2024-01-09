import React from 'react'
import Column from './Column'
import Card from './Card'


const Innercontainer = () => {
  const categories = [
    { key: "Home", text: "Home", icon: "/Home.png", flexShrink: "0" },
    { key: "Orders", text: "Orders", icon: "/Orders.png", flexShrink: "0" },
    { key: "Products", text: "Products", icon: "/Products.png", flexShrink: "0" },
    { key: "Delivery", text: "Delivery", icon: "/Delivery.png", flexShrink: "0" },
    { key: "Marketing", text: "Marketing", icon: "/Marketing.png", flexShrink: "0" },
    { key: "Analytics", text: "Analytics", icon: "/Analytics.png", flexShrink: "0" },
    { key: "Payments", text: "Payments", icon: "/Payments.png", flexShrink: "0" },
    { key: "Tools", text: "Tools", icon: "/Tools.png", flexShrink: "0" },
    { key: "Discounts", text: "Discounts", icon: "Discounts.png", flexShrink: "0" },
    { key: "Audience", text: "Audience", icon: "/Audience.png", flexShrink: "0" },
    { key: "Apperance", text: "Apperance", icon: "/Apperance.png", flexShrink: "0" },
    { key: "Plugins", text: "Plugins", icon: "/Plugins.png", flexShrink: "0" }
  ];
  
  return (
    <div className="bg-secondary-navbar w-30% flex flex-col items-center justify-start py-4 px-2.5 box-border gap-[16px] text-left text-mini text-black-100 font-sub-title-medium flex-1">
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
        <div className="w-48 shrink-0 flex flex-row items-center justify-start relative gap-[12px]">
          <div className="relative rounded bg-black-100 w-10 h-10 z-[0]" />
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px] z-[1]">
            <div className="self-stretch relative leading-[22px] font-medium">
              Nishyan
            </div>
            <div className="self-stretch relative text-smi font-inter [text-decoration:underline] leading-[16px] font-body-2-medium opacity-[0.8]">
              Visit store
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0.5px] left-[0.5px] rounded w-[39px] h-[39px] object-cover z-[2]"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover z-[3]"
            alt=""
            src="/bold--chevron-down@2x.png"
          />
        </div>
        <div className="flex-1 shrink-0 flex flex-col items-start justify-start gap-[4px]">
        {categories.map((category, index) => (
          <Column
            key={index}
            Icon={category.icon}
            text={category.text}
            FlexShrink={category.flexShrink}
          />
        ))}
        </div>
      </div>
      <Card />
    </div>
  )
}

export default Innercontainer