import {useMemo,React} from 'react'
import TableText from './TableText';

const CellHeader = ({
  sampleData,
  cellHeaderRowBackgroundColor,
  cellHeaderRowWidth,
  cellHeaderRowFlexShrink,
  cellHeaderRowAlignItems,
  textIconFlexShrink,
}) => {
  const cellHeaderRowStyle = useMemo(() => {
    return {
      backgroundColor: cellHeaderRowBackgroundColor,
      width: cellHeaderRowWidth,
      flexShrink: cellHeaderRowFlexShrink,
      alignItems: cellHeaderRowAlignItems,
    };
  }, [
    cellHeaderRowBackgroundColor,
    cellHeaderRowWidth,
    cellHeaderRowFlexShrink,
    cellHeaderRowAlignItems,
  ]);

  const textIconStyle = useMemo(() => {
    return {
      flexShrink: textIconFlexShrink,
    };
  }, [textIconFlexShrink]);
  return (
    <div
      className="bg-black-100 overflow-hidden flex flex-col items-start justify-center"
      style={cellHeaderRowStyle}
    >
      <div
        className="shrink-0 flex flex-row items-center justify-start gap-[4px]"
        style={textIconStyle}
      >
        <TableText
          image1="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          text={sampleData}
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          infoTag={false}
          image={false}
          iconRight={false}
          twoLineText={false}
          italics={false}
          iconLeft={false}
          threeLineText={false}
          checkbox={false}
          strikeThrough={false}
          sampleDataFontWeight="500"
          sampleDataTextAlign="left"
          sampleDataColor="#4d4d4d"
        />
      </div>
      <div
        className="shrink-0 flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]"
      >
        <div className="relative rounded-[50%] w-0 h-0" />
        <div className="relative rounded-[50%] w-0 h-0" />
      </div>
    </div>
  )
}

export default CellHeader