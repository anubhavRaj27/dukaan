import React from 'react'
import Heading from './Heading'
import CellHeader from './CellHeader'

const ItemTable = () => {
  return (
    <div className="rounded-lg bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] w-[1152px] overflow-hidden flex flex-col items-end justify-start pt-3 px-3 pb-2 box-border text-left text-base text-black-30 font-sub-title-medium">
      <div className="flex flex-col items-end justify-start gap-[12px]">
        <div className="self-stretch shrink-0 flex flex-row items-center justify-between">
            <Heading />
            <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
              <div className="shrink-0 flex flex-row items-center justify-end gap-[16px]">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <div className="rounded bg-black-100 shrink-0 flex flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                    <div className="relative leading-[24px]">Sort</div>
                    <img
                      className="relative w-4 h-4 shrink-0 object-cover"
                      alt=""
                      src="/outlined--sort@2x.png"
                    />
                  </div>
                </div>
                <div className="relative w-9 h-9">
                  <div className="absolute top-[0px] right-[0px] rounded box-border w-9 h-9 border-[1px] border-solid border-black-85" />
                  <img
                    className="absolute top-[8px] right-[8px] w-5 h-5 object-cover"
                    alt=""
                    src="/iconsdownload@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded bg-black-95 w-[1128px] shrink-0 flex flex-row items-center justify-between py-2.5 px-3 box-border">
            <img
              className="relative w-5 h-5 object-cover hidden"
              alt=""
              src="/controls--check-box@2x.png"
            />
            <CellHeader
              sampleData="Order ID"
              cellHeaderRowBackgroundColor="unset"
              cellHeaderRowWidth="150.7px"
              cellHeaderRowFlexShrink="0"
              cellHeaderRowAlignItems="flex-start"
              textIconFlexShrink="unset"
            />
            <CellHeader
              sampleData="Order Date"
              cellHeaderRowBackgroundColor="unset"
              cellHeaderRowWidth="150.7px"
              cellHeaderRowFlexShrink="0"
              cellHeaderRowAlignItems="flex-start"
              textIconFlexShrink="unset"
              sampleDataTextAlign="right"
              resizableSpacerFlexShrink="unset"
            />
            <CellHeader
              sampleData="Order Amount"
              cellHeaderRowBackgroundColor="unset"
              cellHeaderRowWidth="150.7px"
              cellHeaderRowFlexShrink="0"
              cellHeaderRowAlignItems="flex-start"
              textIconFlexShrink="unset"
              sampleDataTextAlign="left"
              resizableSpacerFlexShrink="unset"
            />
            <CellHeader
              sampleData="Transaction fees"
              cellHeaderRowBackgroundColor="unset"
              cellHeaderRowWidth="150.7px"
              cellHeaderRowFlexShrink="0"
              cellHeaderRowAlignItems="flex-end"
              textIconFlexShrink="unset"
              sampleDataTextAlign="right"
              resizableSpacerFlexShrink="unset"
            />
          </div>
      </div>
    </div>
  )
}

export default ItemTable