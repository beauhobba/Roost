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
  const [opacity, setOpacity] = React.useState(0.15);

  React.useEffect(() => {
    if (props.text != null) {
      setOpacity(0.9);
    }
  }, [opacity]);

  return (
    <Card onClick={props.event}
    onMouseOver={()=>setShow(true)} 
    onMouseOut={()=>setShow(false)}>
      
      <CardBlock>
        {show ? (
          <CardImg src={props.photo} alt=""/>
        ) : (
          <CardImg src={props.back_photo} alt="" />
        )}
        <CardImgOverlay
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(90, 90, 90, "+opacity+")",
          }}
        >
          {props.font_type ? 
          <CardTitle  style={{ color: 'white', fontWeight:"heavy" }} >
          <p  class="font-weight-heavy" style={{ fontSize: props.text_size, textAlign: "center" }}>

            {props.text}
            </p>
          </CardTitle>
          :
          <CardTitle  style={{ color: 'white', fontWeight:"light"}} >
          <p  class="font-weight-light" style={{ fontSize: props.text_size, textAlign: "center"}}>

            {props.text}
            </p>
          </CardTitle>
}  
        </CardImgOverlay>
      </CardBlock>
    </Card>
  );
};

export default CardTile;
