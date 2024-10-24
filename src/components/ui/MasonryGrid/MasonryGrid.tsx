import { useState } from "react";
import styles from "./MasonryGrid.module.css";
import { motion } from "framer-motion";
import DATA from "../../../data/photos";
import clsx from "clsx";

export interface Image {
  id: string;
  alt: string;
  src: string;
  caption: string;
  selected?: boolean;
  shape?: "wide" | "tall" | "big";
}

export default function MasonryGrid({ ...delegated }) {
  const [images, setImages] = useState<Image[]>(DATA as Image[]);

  function toggleImage(toggledImage: Image) {
    const nextImages = images.map((image) => {
      if (image.id !== toggledImage.id) return image;

      return { ...image, selected: !toggledImage.selected };
    });

    setImages(nextImages);
  }
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    const nextIsExpanded = !isExpanded;
    setIsExpanded(nextIsExpanded);
  }
  return (
    <div {...delegated}>
      <div className={styles.container}>
        {images.map((img) => {
          return (
            <motion.div
              onClick={() => toggleImage(img)}
              layout
              transition={{ type: "spring", stiffness: 600, damping: 60 }}
              className={clsx(
                "sepia-[0.2] hover:sepia-0",
                img.selected && img.shape !== "tall" && img.shape !== "wide"
                  ? styles.big
                  : "",
                img.selected && img.shape === "tall" ? styles.bigTall : "",
                img.selected && img.shape === "wide" ? styles.bigWide : "",
                img.shape === "tall" ? styles.tall : "",
                img.shape === "wide" ? styles.wide : "",
              )}
            >
              <img src={img.src} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
