import React, { useState, useEffect, useRef } from "react";
import { LoadingSection, LoadingSectionText } from ".";

import box_2 from "../../images/point_birds.png";
import box_3 from "../../images/exp_birds.png";

const images = [];
for (let i = 1; i <= 14; i++) {
  images.push(require(`../../images/animation/${i}.png`));
}

const Loading = (props) => {
  const [activeModule, setActiveModule] = useState(0);
  const moduleRefs = useRef([]);
  const [activeModule2, setactiveModule2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the index of the active module based on the scroll position
      const scrollPosition = window.scrollY - 800;
      const moduleHeight = 170; // Adjust module height as needed
      var activeModuleIndex = Math.floor(scrollPosition / moduleHeight);

      // Update the active module
      if (activeModuleIndex > 13) {
        activeModuleIndex = 13;
      }

      setactiveModule2(activeModuleIndex);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the index of the active module based on the scroll position
      const scrollPosition = window.scrollY - 300;
      const moduleHeight = 900; // Adjust module height as needed
      const activeModuleIndex = Math.floor(scrollPosition / moduleHeight);

      // Update the active module
      setActiveModule(activeModuleIndex);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const modules = [
    {
      title: "What is Roost",
      text: "Roost consists of beautiful birds from all continents",
      image: box_2,
      symbol: "roost",
    },
    {
      title: "The Aim",
      text: "The aim of the game is to get the lowest score",
      image: box_2,
      symbol: "champion",
    },
    {
      title: "What Else",
      text: "Birds contain abilities where you can switch, steal, discover, enact revenge, boost your final score or FLIP other player's cards. You can stack and match to other player's flipped cards. Event cards introduce one-time game cards, which can be extraordinarily crucial in certain circumstances and allow players who are losing miserably to have a chance of a comeback. Roost comes with 36 additional cards that add new dynamic twists.",
      image: box_3,
      symbol: "else",
    },
  ];

  return (
    <>
      {/* <div style={{height: "1000px", position: "relative"}}> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          height: "200px",
        }}
      >
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          {modules.map((module, index) => (
            <div key={index} ref={(ref) => (moduleRefs.current[index] = ref)}>
              <LoadingSectionText
                text={module.text}
                title={module.title}
                image={module.image}
                active={activeModule === index}
                symbol={module.symbol}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            width: "50%",
            height: "450px",
            paddingLeft: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={images[activeModule2]} style={{ width: "40%" }} />
        </div>
      </div>
    </>
  );
};

export default Loading;
