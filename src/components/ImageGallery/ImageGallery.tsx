import React from "react";

import DATA from "./data";

import ImageGrid from "./ImageGrid";
import ImageFeature from "./ImageFeature";
import styles from "./ImageGallery.module.css";

function ImageGallery() {
  const [images, setImages] = React.useState(DATA);

  function toggleImage(toggledImage) {
    const nextImages = images.filter(
      (image) => image.isbn !== toggledImage.isbn,
    );

    nextImages.push({
      ...toggledImage,
      selected: !toggledImage.selected,
    });

    setImages(nextImages);
  }

  const selectedImages = images.filter((image) => image.selected);
  const unselectedImages = images.filter((image) => !image.selected);

  return (
    <div className={styles.wrapper}>
      <ImageGrid
        className={styles.grid}
        images={unselectedImages}
        handleSelectImage={toggleImage}
      />
      {selectedImages.length > 0 && (
        <ImageFeature images={selectedImages} handleRemoveImage={toggleImage} />
      )}
    </div>
  );
}

export default ImageGallery;
