import React, { Component } from "react";
import GalleryItem from "./GalleryItem";

const Gallery = props => {
  if (props.photos) {
    return props.photos.map(photo => (
      <GalleryItem
        farmId={photo.farm}
        serverId={photo.server}
        id={photo.id}
        secret={photo.secret}
      ></GalleryItem>
    ));
  } else {
    return null;
  }
};

export default Gallery;
