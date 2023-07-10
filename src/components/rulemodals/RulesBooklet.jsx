import React, { useState, useEffect } from "react";
import page_1 from "../../images/rules/page_1.png";
import page_2 from "../../images/rules/page_2.png";
import page_3 from "../../images/rules/page_3.png";
import page_4 from "../../images/rules/page_4.png";
import page_5 from "../../images/rules/page_5.png";
import page_6 from "../../images/rules/page_6.png";
import page_7 from "../../images/rules/page_7.png";
import page_8 from "../../images/rules/page_8.png";
import page_9 from "../../images/rules/page_9.png";
import page_10 from "../../images/rules/page_10.png";
import page_11 from "../../images/rules/page_11.png";
import page_12 from "../../images/rules/page_12.png";
import page_13 from "../../images/rules/page_13.png";
import page_14 from "../../images/rules/page_14.png";
import page_15 from "../../images/rules/page_15.png";
import page_16 from "../../images/rules/page_16.png";
import page_17 from "../../images/rules/page_17.png";
import page_18 from "../../images/rules/page_18.png";
import page_19 from "../../images/rules/page_19.png";
import page_20 from "../../images/rules/page_20.png";
import page_21 from "../../images/rules/page_21.png";
import page_22 from "../../images/rules/page_22.png";
import page_23 from "../../images/rules/page_23.png";
import page_24 from "../../images/rules/page_24.png";
import { isMobile } from "react-device-detect";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";

export const rules = [
  page_1,
  page_2,
  page_3,
  page_4,
  page_5,
  page_6,
  page_7,
  page_8,
  page_9,
  page_10,
  page_11,
  page_12,
  page_13,
  page_14,
  page_15,
  page_16,
  page_17,
  page_18,
  page_19,
  page_20,
  page_21,
  page_22,
  page_23,
  page_24,
];

function RulesBooklet() {
  const [imgSize, setImgSize] = useState("40%");
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index - 1 < 0) {
      return;
    }
    setIndex(index - 2);
  };
  const slideRight = () => {
    if (index + 1 > 23) {
      return;
    }
    setIndex(index + 2);
  };
  useEffect(() => {
    if (isMobile) {
      setImgSize("50%");
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: 10 }}>
            <IconContext.Provider
              value={{ color: "#EC2383", size: "50px", padding: 50 }}
            >
              <BsFillArrowLeftSquareFill
                onClick={slideLeft}
              ></BsFillArrowLeftSquareFill>
            </IconContext.Provider>
          </div>
          <div style={{ padding: 10 }}>
            <IconContext.Provider
              value={{ color: "#EC2383", size: "50px", padding: 10 }}
            >
              <BsFillArrowRightSquareFill
                onClick={slideRight}
              ></BsFillArrowRightSquareFill>
            </IconContext.Provider>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {index == 0 || index == 23 ? (
            <img style={{ width: imgSize }} src={rules[index]}></img>
          ) : (
            <>
              <img style={{ width: imgSize }} src={rules[index]}></img>
              <img style={{ width: imgSize }} src={rules[index + 1]}></img>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default RulesBooklet;
