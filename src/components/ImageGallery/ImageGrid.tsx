import React from "react";
import { motion } from "framer-motion";
import { X } from "react-feather";

import styles from "./ImageGrid.module.css";

function ImageGrid({ images, handleSelectImage, ...delegated }) {
  return (
    <section {...delegated}>
      <ul className={styles.wrapper}>
        {images.map((image) => (
          <li key={image.isbn}>
            <button
              className={styles.bookBtn}
              onClick={() => handleSelectImage(image)}
            >
              <motion.img
                layoutId={`book-cover-${image.isbn}`}
                alt={image.name}
                src={image.coverSrc}
                className={styles.bookCover}
                draggable={false}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ImageGrid;
