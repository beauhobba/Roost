import React, {useState} from "react";
import cooking_robot from '../../images/cooking_robot.png'
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Robotatouille1 from '../../images/Robotatouille/Robotatouille1.png'
import Robotatouille2 from '../../images/Robotatouille/Robotatouille2.png'
import Robotatouille3 from '../../images/Robotatouille/Robotatouille3.png'
import Robotatouille4 from '../../images/Robotatouille/Robotatouille4.PNG'
import Robotatouille5 from '../../images/Robotatouille/Robotatouille5.jpg'

import robot from '../../images/Robotatouille/rat.png'

import pdfFile from "./Robotatouille.pdf"

import SinglePagePDFViewer from "./single-page";

const images = [
    {
      original: Robotatouille1,
      thumbnail: Robotatouille1,
    },
    {
      original: Robotatouille2,
      thumbnail: Robotatouille2,
    },
    {
      original: Robotatouille3,
      thumbnail: Robotatouille3,
    },
    {
      original: Robotatouille4,
      thumbnail: Robotatouille4,
    },
    {
      original: Robotatouille5,
      thumbnail: Robotatouille5,
    },
  ];

const Robotatouille = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Robotatouille"

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    const handleSubmit = (e) => {
      handleShow();
    };

    return(
    <><div class="col-sm">
        <CardTile
            photo={cooking_robot}
            text={class_text}
            event={() => handleSubmit()} 
        />
        </div>
        <Modal show={show} onHide={handleClose} size="lg">

            <Modal.Title style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}>
                <div>
                    <h1 class="font-weight-light" size="lg">
                    {class_text}
                    </h1>

                </div>
            </Modal.Title>

            <Modal.Body>
                <div class="font-weight-light">

                    <h4 class="font-weight-light">
                        Description
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    This role involved working with a team of 2 other individuals to program a 'robotic bar' for the promotion of the new Heineken 0.0, zero alcohol beer. This full-on role involved robotic arm movement using the UR-5 robotic arms, various sensors, person detection using machine learning, an automated conveyor system, ROS interfacing and a surplus of analog I/O electrical wiring. We worked directly with a marketing team, creating various on-the-spot changes to the robot, to finalise a pair of robots for a week-long activation period.
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Skills Used
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ul>
                        <li>Kinematics/Coordinate Transforms</li>
                        <li>UAV Control</li>
                        <li>Semantic Segmentation</li>
                        <li>OpenCV</li>
                        <li>Geotagging</li>
                    </ul>

                    <h4 class="font-weight-light">
                        Research Paper
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />

                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>   
                    <SinglePagePDFViewer pdf={pdfFile} />
                    </div>
                    </div>
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Video
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <ImageGallery items={images} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Robotatouille