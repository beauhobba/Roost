import React, { Text } from "react";
import CardTile from "../cards/CardTile";
import "react-image-gallery/styles/css/image-gallery.css";

import roost_back from "../../images/roost-111.png";

const Card = (props) => {
  const [show, setShow] = React.useState(true);
  const [back, setBack] = React.useState(roost_back);
  const [heavyfont, setHeavyfont] = React.useState(true);

  const class_text = props.text
  const class_text_size = props.text_size
  // const handleSubmit = (e) => {
  //     setShow(!show)
  // };
  React.useEffect(() => {
    if (props.back != null) {
      setBack(props.back);
    }
  }, [back]);

  React.useEffect(() => {
    if (props.font_heavy != null) {
        setHeavyfont(false);
    }
  }, [heavyfont]);
  return (
    <>
      <div class="col-sm">
        <CardTile
          photo={props.front}
          text={class_text}
          text_size={class_text_size}
          show={show}
          back_photo={back}
          font_type = {heavyfont}
          // event={() => handleSubmit()}
        />
      </div>
    </>
  );
};

export default Card;
