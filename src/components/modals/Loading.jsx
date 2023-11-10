import React, { useState, useEffect, useRef } from 'react';
import { LoadingSection } from '.';
import box from '../../images/box/box_asset.png';
import box_2 from '../../images/box/birds_2.png';
import box_3 from '../../images/box/newbird.png';



const Loading = (props) => {
  const [activeModule, setActiveModule] = useState(0);
  const moduleRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the index of the active module based on the scroll position
      const scrollPosition = window.scrollY;
      const moduleHeight = 350; // Adjust module height as needed
      const activeModuleIndex = Math.floor(scrollPosition / moduleHeight);

      // Update the active module
      setActiveModule(activeModuleIndex);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const modules = [
    {
      title: "What is Roost",
      text: "Roost consists of beautiful birds from all continents",
      image: box,
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
]
  return (
    <>
      {modules.map((module, index) => (
        <div key={index} ref={(ref) => (moduleRefs.current[index] = ref)}>
          <LoadingSection
            text={module.text}
            title={module.title}
            image={module.image}
            active={activeModule === index}
            symbol={module.symbol}
          />
        </div>
      ))}
    </>
  );
};

export default Loading;
