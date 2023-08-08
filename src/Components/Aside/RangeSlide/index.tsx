import { Slider } from "@mui/material";
import { TRangeSlideProps } from "./@types";
import mock from "../../../Services/mock";
import { useContext } from "react";
import { CarContext } from "../../../Providers/CarContext";

const RangeSlide = ({ title, stepValue, itemKey }: TRangeSlideProps) => {
  const { handleSliderChange, car, cars } = useContext(CarContext);
  const numberArr: number[] = mock.map((item) => Number(item[itemKey]));

  const minNumber = Math.min(...numberArr) / 1000;

  const maxNumber = Math.max(...numberArr) / 1000;

  const sliderValue = car[itemKey] || minNumber;

  console.log(cars);

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <h3>
          {itemKey == "price" ? `R$ ${minNumber} mil` : `${minNumber} mil km`}
        </h3>
        <Slider
          value={Number(sliderValue)}
          onChange={(event, newValue) => handleSliderChange(newValue, itemKey)}
          valueLabelDisplay="auto"
          step={stepValue}
          min={minNumber}
          max={maxNumber}
          sx={{
            width: 300,
            color: "#9747FF",
            "& .MuiSlider-thumb": {
              width: "12px",
              height: "12px",
            },
          }}
        />
        <h3>
          {itemKey == "price" ? `R$ ${maxNumber} mil` : `${maxNumber} mil km`}
        </h3>
      </div>
    </div>
  );
};

export default RangeSlide;
