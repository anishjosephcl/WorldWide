import styles from "./Message.module.css";
import React from "react";
import PropTypes from 'prop-types';
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}
Message.propTypes = {
  message:PropTypes.string
};

export default Message;
