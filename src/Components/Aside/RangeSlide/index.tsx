import { Slider } from "@mui/material";
import { TRangeSlideProps } from "./@types";
import mock from "../../../Services/mock";
import { StyledSlider } from "./style";
import { useCarContext } from "../../../Hooks";

const RangeSlide = ({
  title,
  stepValue,
  itemKey,
  min,
  max,
}: TRangeSlideProps) => {
  const { handleSliderChange, car } = useCarContext();

  const sliderValue: number[] = car[itemKey] as number[];

  return (
    <StyledSlider>
      <h2>{title}</h2>
      <div>
        <h3>{itemKey == "price" ? `R$ ${min}` : `${min} km`}</h3>
        <h3>{itemKey == "price" ? `R$ ${max}` : `${max} km`}</h3>
      </div>
      <Slider
        value={sliderValue.map((number: number) => Number(number))}
        onChange={(event, newValue) => handleSliderChange(newValue, itemKey)}
        valueLabelDisplay="auto"
        step={stepValue}
        min={min}
        max={max}
        sx={{
          width: "100%",
          color: "#5126EA",
          "& .MuiSlider-thumb": {
            width: "10px",
            height: "10px",
          },
        }}
        valueLabelFormat={(value) =>
          Array.isArray(value) ? `${value[0]} - ${value[1]}` : value
        }
      />
    </StyledSlider>
  );
};

export default RangeSlide;
