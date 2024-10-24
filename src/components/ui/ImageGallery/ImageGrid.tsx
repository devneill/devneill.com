import { motion } from "framer-motion";
import { type Image } from "./ImageGallery";

import styles from "./ImageGrid.module.css";

interface ImageGridProps {
  images: Image[];
  handleSelectImage: (image: Image) => void;
  [key: string]: any; // for ...delegated
}

function ImageGrid({
  images,
  handleSelectImage,
  ...delegated
}: ImageGridProps) {
  return (
    <section {...delegated}>
      <ul className={`grid py-4 rounded-lg ${styles.wrapper}`}>
        {images.map((image) => (
          <li key={image.id}>
            <button
              className={styles.bookBtn}
              onClick={() => handleSelectImage(image)}
            >
              <motion.img
                layoutId={`image-${image.id}`}
                alt={image.alt}
                src={image.src}
                className="object-cover rounded-lg will-change-transform size-full"
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
