import React from "react";
import styles from "./Search.module.scss";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <BiSearchAlt2 size={18} className={styles.icon} />

      <input
        type="text"
        placeholder="Search by Name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
