import React, { useEffect, useRef, useState } from "react";
import { FilterBlock, Title } from "../styled";
import { BarRange, ThumbValue } from "./styled";

const PriceFilter: React.FC = () => {
  const [valuePrice, setValuePrice] = useState(20);
  const rangeRef = useRef<HTMLInputElement>(null);
  const [thumbPosition, setThumbPosition] = useState(0);
  console.log("PriceFilter valuePrice:", valuePrice);
  useEffect(() => {
    if (rangeRef.current) {
      const percent = ((valuePrice - 50) / (200 - 50)) * 100;
      const sliderWidth = rangeRef.current.offsetWidth;
      const offset = (percent / 100) * sliderWidth;
      setThumbPosition(offset);
    }
  }, [valuePrice]);
  return (
    <FilterBlock>
      <Title>
        Rango de Precio (por hora)
      </Title>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>S/. 20</span>
          <span>S/. 200</span>
        </div>
        <BarRange
          value={valuePrice}
          min={20}
          max={200}
          onChange={(e) => {
            setValuePrice(Number(e.target.value));
          }}
        />
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          Precio Elegido:
          <ThumbValue style={{ left: `${thumbPosition}px` }}>
            S/. {valuePrice}
          </ThumbValue>
        </div>
      </div>
    </FilterBlock>
  );
};

export default PriceFilter;
