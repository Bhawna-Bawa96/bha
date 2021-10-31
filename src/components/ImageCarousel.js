import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Button } from "@material-ui/core";

const ImageCarousel = ({ imageData, count }) => {
  const [current, setCurrent] = useState(0);
  const totalPages = Math.ceil(imageData.length / count);

  const increment = () => {
    setCurrent(current + 1);
  };

  const decrement = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      {imageData.length ? (
        <div className="slider">
          <Button onClick={decrement} disabled={current === 0}>
            <FaArrowAltCircleLeft
              className="left-arrow"
              color={current === 0 ? "grey" : "#000"}
            />
          </Button>

          {imageData
            .slice(current * count, current * count + count)
            .map((image, index) => {
              return (
                <div className="parent" key={`${image.id}_${index}`}>
                  <img src={image.imageUrl} alt="images" className="image" />
                </div>
              );
            })}
          <Button onClick={increment} disabled={current === totalPages - 1}>
            <FaArrowAltCircleRight
              className="right-arrow"
              color={current === totalPages - 1 ? "grey" : "#000"}
            />
          </Button>
        </div>
      ) : (
        <div>No Data to show</div>
      )}
    </>
  );
};
export default ImageCarousel;
