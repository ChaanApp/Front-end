import React from "react";
import styles from "./sectionVideo.module.scss";

export default function CardVideo() {
  return (
    <div>
      <div className={styles.ContainerVideoM}>
        <video autoPlay loop muted className={styles.Video}>
          <source Image="/videochaanmobilSc.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.ContainerVideoW}>
        <video autoPlay loop muted className={styles.Video}>
          <source Image="/videochaanwSc.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
