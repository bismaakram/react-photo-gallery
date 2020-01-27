import React from "react";
import { Col } from "reactstrap";

const GalleryItem = props => {
  return (
    <Col>
      <img
        src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`}
        style={{
          width: "270px",
          height: "300px",
          marginBottom: "1rem",
          marginTop: "1rem"
        }}
      />
    </Col>
  );
};

export default GalleryItem;
