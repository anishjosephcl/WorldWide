import styles from "./CountryItem.module.css";
import React from "react";
import PropTypes from 'prop-types';

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
CountryItem.propTypes = {
  country:PropTypes.object
};
export default CountryItem;
