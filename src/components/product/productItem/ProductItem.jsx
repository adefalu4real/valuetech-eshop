import React from "react";
import styles from "./ProductItem.module.scss";
import Card from "../../card/Card";
import { Link } from "react-router-dom";

const ProductItem = ({ product, grid, id, name, price, imageUrl }) => {
  const shortenText = (text) => {
    if (text.length > 15) {
      const shortenedText = text.substring(0, 15).concat("...");
      return shortenedText;
    }
    return text;
  };
  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      <Link>
        <div className={styles.img}>
          <img src={imageUrl} alt={name} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$${price}`}</p>
          <h4>{shortenText(name)}</h4>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
