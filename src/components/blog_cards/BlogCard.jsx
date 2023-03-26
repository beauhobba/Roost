import React, {Fragment} from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardHeader
} from "react-bootstrap-card";

const BlogCard = (props) => {
//   const [show, setShow] = React.useState(false);
//   const [opacity, setOpacity] = React.useState(0.15);

//   React.useEffect(() => {
//     if (props.text != null) {
//       setOpacity(0.9);
//     }
//   }, [opacity]);
const dateObj = new Date(props.date);

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = dateObj.getFullYear().toString().slice(-2);
const month = monthNames[dateObj.getMonth()];
const day = dateObj.getDate();
const timeOptions = { hour12: true, hour: 'numeric', minute: 'numeric' };
const timeString = dateObj.toLocaleString('en-US', timeOptions);

const formattedDate = `${day.toString().padStart(2, '0')}-${month.slice(0,3)}-${year} ${timeString}`;


  return (
    // <p>
    //     {props.name}
    // </p>
<Card
  className="my-2"
  style={{
    width: '18rem'
  }}
>
    <CardHeader>
        Post Date: <i>{formattedDate}</i>
    </CardHeader>
      <CardTitle   style={{fontWeight:"heavy", paddingLeft: 10}}>
        {props.name}
      </CardTitle>
      <CardText style={{fontWeight:"heavy", paddingLeft: 20, paddingRight: 20}}>
      <td dangerouslySetInnerHTML={{__html: props.description}} >
        </td>
      </CardText>
    </Card>
  );
};

export default BlogCard;
