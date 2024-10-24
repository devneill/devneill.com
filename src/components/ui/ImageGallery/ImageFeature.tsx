import React from "react";
import { motion } from "framer-motion";
import { type Image } from "./ImageGallery";

// import VisuallyHidden from "./VisuallyHidden";
import styles from "./ImageFeature.module.css";

interface ImageFeatureProps {
  images: Image[];
  handleRemoveImage: (image: Image) => void;
}

function ImageFeature({ images, handleRemoveImage }: ImageFeatureProps) {
  return (
    <div>
      <ol>
        {images.map((image, imageIndex) => {
          return (
            <li
              key={image.id}
              className="relative flex flex-col items-center justify-center"
            >
              <motion.img
                layoutId={`image-${image.id}`}
                alt={image.alt}
                src={image.src}
                draggable={false}
                className="h-96 w-full rounded-lg block object-cover will-change-transform"
                onClick={() => handleRemoveImage(image)}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 60,
                }}
              />
              {/* <motion.button
                layout="position"
                className={styles.deleteBtn}
                onClick={() => handleRemoveImage(image)}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 60,
                }}
              >
                <X /> */}
              {/* <VisuallyHidden>Remove {book.name}</VisuallyHidden> */}
              {/* </motion.button> */}
              <p className="text-ellipsis h-20 w-full overflow-hidden">
                {image.caption}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ImageFeature;
