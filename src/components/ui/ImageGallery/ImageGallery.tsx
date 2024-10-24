import React from "react";

import DATA from "./data";

import ImageGrid from "./ImageGrid";
import ImageFeature from "./ImageFeature";

export interface Image {
  id: string;
  alt: string;
  src: string;
  caption: string;
  selected?: boolean;
}

function ImageGallery() {
  const [images, setImages] = React.useState<Image[]>(DATA);

  function toggleImage(toggledImage: Image) {
    const nextImages = images.filter((image) => image.id !== toggledImage.id);

    nextImages.push({
      ...toggledImage,
      selected: !toggledImage.selected,
    });

    setImages(nextImages);
  }

  const selectedImages = images.filter((image) => image.selected);
  const unselectedImages = images.filter((image) => !image.selected);

  return (
    <div className="flex flex-col">
      <ImageGrid images={unselectedImages} handleSelectImage={toggleImage} />
      {selectedImages.length > 0 && (
        <ImageFeature images={selectedImages} handleRemoveImage={toggleImage} />
      )}
    </div>
  );
}

export default ImageGallery;
