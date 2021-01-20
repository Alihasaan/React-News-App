import React from "react";
import "./form.style.css";
const Form = props => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3">
            <input
              id = "01"
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Country"
            />
          </div>
          <div className="col-md-3 mt-md-0 my-2 text-md-left">
            <button className="btn btn-primary">Get News</button>
          </div>
        </div>
      </form>
    </div>
  );
};
function error(){
  return(
    <div className="alert alert-danger mx-5" role ="alert">
      Please enter Country Name or Country Code.
    </div>
  )
}
export default Form;
