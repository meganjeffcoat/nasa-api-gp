import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import Loader from "react-loader-spinner";

import { getPhoto } from "../actions";

const NASAPhoto = props => {
  const fetchPhoto = e => {
    e.preventDefault();
    props.getPhoto();
  };

  return (
    <>
      <h2>NASA Photo of the day 🚀</h2>
      {props.isLoading && (
        <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      )}
      {props.photoOfTheDay && (
        <>
          <h3>{props.photoOfTheDay.title}</h3>
          <div>
            <img src={props.photoOfTheDay.url} alt="NASA Photo of the day" />
          </div>
        </>
      )}

      {props.error && <p className="error">{props.error}</p>}
      <Button color="info" onClick={fetchPhoto}>
        🛰 See today's photo 📸
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  photoOfTheDay: state.photoOfTheDay,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getPhoto }
)(NASAPhoto);