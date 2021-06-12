import React from "react";
import "./style.css";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function SearchForm(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control text-center" type="text" {...props} />
    </div>
  );
}

export default SearchForm;
