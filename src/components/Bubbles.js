import React from "react";
import styles from "./styles/Bubbles.module.css";
export default function Bubbles(props) {
  const { text, img } = props;
  const textArr = text.split("|");
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={img} />
      </div>
      <div className={styles.primaryText}>{textArr[0]}</div>
      <div className={styles.secondaryText}>
        {textArr[1][0] === "/" ? <img src={textArr[1]}></img> : textArr[1]}
        {/* {textArr[1]} */}
      </div>
    </div>
  );
}
