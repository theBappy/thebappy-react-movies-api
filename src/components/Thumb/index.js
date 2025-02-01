import React from "react";
import { Image } from "./Thumb.styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <img src={image} alt="movie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
}

export default Thumb;
