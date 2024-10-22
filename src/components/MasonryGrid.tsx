import { useState } from "react";
import styles from "./MasonryGrid.module.css";
import { motion } from "framer-motion";

export default function MasonryGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    const nextIsExpanded = !isExpanded;
    setIsExpanded(nextIsExpanded);
  }
  return (
    <div className={styles.container}>
      <motion.div
        onClick={handleClick}
        layout
        className={isExpanded ? styles.big : ""}
      >
        <img src="/assets/photos/plain.jpeg" />
      </motion.div>
      <motion.div
        onClick={handleClick}
        layout
        className={isExpanded ? styles.big : ""}
      >
        <img src="/assets/photos/fly.jpeg" />
      </motion.div>
      <motion.div
        onClick={handleClick}
        layout
        className={isExpanded ? styles.big : ""}
      >
        <img src="/assets/photos/bush-view.jpeg" />
      </motion.div>
      <motion.div
        onClick={handleClick}
        layout
        className={isExpanded ? styles.big : ""}
      >
        <img src="/assets/photos/aristea-sunset.jpeg" />
      </motion.div>
      <motion.div
        onClick={handleClick}
        layout
        className={isExpanded ? styles.big : ""}
      >
        <img src="/assets/photos/happiness.jpeg" />
      </motion.div>
      <motion.div onClick={handleClick} layout className={styles.tall}>
        <img src="/assets/photos/safari.jpeg" />
      </motion.div>
    </div>
  );
}
