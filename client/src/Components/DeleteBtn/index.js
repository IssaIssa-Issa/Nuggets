import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <button className="delete-btn btn btn-danger" {...props} role="button" tabIndex="0">
      ✗
    </button>
  );
}

export default DeleteBtn;
