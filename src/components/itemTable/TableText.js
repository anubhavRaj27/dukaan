import {useMemo,React} from 'react'

const TableText = ({
  image1,
  controlsCheckBox,
  outlinedWhatsApp,
  text ,
  outlinedWhatsApp1,
  infoTag = false,
  image = false,
  iconRight = false,
  twoLineText = false,
  italics = false,
  iconLeft = false,
  threeLineText = false,
  checkbox = false,
  strikeThrough = false,
  sampleDataFontWeight,
  sampleDataTextAlign,
  sampleDataColor,
}) => {
  const sampleDataStyle = useMemo(() => {
    return {
      fontWeight: sampleDataFontWeight,
      textAlign: sampleDataTextAlign,
      color: sampleDataColor,
    };
  }, [sampleDataFontWeight, sampleDataTextAlign, sampleDataColor]);

  return (
    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px] text-left text-xs text-black-30 font-body-2-medium">
      {image && (
        <div className="relative w-12 h-12 hidden">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={image1}
          />
        </div>
      )}
      <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
        {checkbox && (
          <img
            className="relative w-5 h-5 object-cover hidden"
            alt=""
            src={controlsCheckBox}
          />
        )}
        <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
            {iconLeft && (
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src={outlinedWhatsApp}
              />
            )}
            <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[20px]" style={sampleDataStyle}>
                {text}
              </div>
              {strikeThrough && (
                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                  Strike-Through Data
                </div>
              )}
            </div>
            {iconRight && (
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src={outlinedWhatsApp1}
              />
            )}
            {italics && (
              <i className="relative text-3xs leading-[16px] hidden text-black-12">
                Italics
              </i>
            )}
          </div>
          {twoLineText && (
            <div className="relative leading-[16px] hidden w-[90px]">
              +1 more
            </div>
          )}
          {threeLineText && (
            <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
              Third Line
            </div>
          )}
          {infoTag && (
            <div className="rounded-10xs bg-chocolate shrink-0 hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
              <div className="relative leading-[16px] font-semibold">COD</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TableText