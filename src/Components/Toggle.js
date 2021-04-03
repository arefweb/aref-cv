import React from 'react'
import { connect } from "react-redux";

const Toggle = ({ lang , dispatch }) => {

  return (
    <div className="toggle">
      <span className="toggle__english">english</span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => {
            dispatch({ type: "CHANGE_LANG" });
          }}
        />
        <span className="slider round"></span>
      </label>
      <span className="toggle__persian">فارسی</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { lang } = state;
  return { lang };
};

export default connect(mapStateToProps)(Toggle);
