import React from "react";
import {
  Card,
  CardBlock,
  CardTitle,
  CardImg,
  CardImgOverlay,
} from "react-bootstrap-card";

const CardTile = (props) => {
  const [show, setShow] = React.useState(false);


  return (
    <Card onClick={props.event}
    onMouseOver={()=>setShow(true)} 
    onMouseOut={()=>setShow(false)}>
      
      <CardBlock>
        {show ? (
          <CardImg src={props.photo} alt="" />
        ) : (
          <CardImg src={props.back_photo} alt="" />
        )}
        <CardImgOverlay
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(90, 90, 90, 0.15)",
          }}
        >
          {/* <CardTitle  style={{ color: 'white', fontWeight:"light" }} >
          <p  class="font-weight-light">

            {props.text}
            </p>
          </CardTitle> */}
        </CardImgOverlay>
      </CardBlock>
    </Card>
  );
};

export default CardTile;
