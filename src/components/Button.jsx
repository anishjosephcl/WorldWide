import styles from "./Button.module.css";
import React from "react";
import PropTypes from 'prop-types';
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick:PropTypes.func,
  children: PropTypes.node,
  type:PropTypes.string
};
export default Button;
