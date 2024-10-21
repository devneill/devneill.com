import React from "react";
import { motion } from "framer-motion";
import { X } from "react-feather";
import { type Image } from "./ImageGallery";

// import VisuallyHidden from "./VisuallyHidden";
import styles from "./ImageFeature.module.css";

interface ImageFeatureProps {
  images: Image[];
  handleRemoveImage: (image: Image) => void;
}

function ImageFeature({ images, handleRemoveImage }: ImageFeatureProps) {
  const [highlightedIndex, setHighlightedIndex] = React.useState<number | null>(
    null,
  );

  return (
    <>
      <div
        className={styles.wrapper}
        onMouseLeave={() => {
          setHighlightedIndex(null);
        }}
      >
        <h2>Reading List</h2>
        <ol className={styles.books}>
          {images.map((image, imageIndex) => {
            const reverseBookIndex = images.length - imageIndex - 1;

            let height = Math.max(50 - reverseBookIndex * 5, 10);

            if (imageIndex === highlightedIndex) {
              height = 100;
            }

            return (
              <li
                key={image.id}
                style={{ height }}
                onMouseEnter={() => {
                  setHighlightedIndex(imageIndex);
                }}
              >
                <motion.img
                  layoutId={`image-${image.id}`}
                  alt={image.alt}
                  src={image.src}
                  draggable={false}
                  className={styles.bookCover}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 60,
                  }}
                />
                <motion.button
                  layout="position"
                  className={styles.deleteBtn}
                  onClick={() => handleRemoveImage(image)}
                  onFocus={() => {
                    setHighlightedIndex(imageIndex);
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 60,
                  }}
                >
                  <X />
                  {/* <VisuallyHidden>Remove {book.name}</VisuallyHidden> */}
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default ImageFeature;
