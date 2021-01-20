import React from "react";
import "./form.style.css";
function Weather(props) {
  return (
  <div className="container">
    <div className="grid-container">
     {props.data.map((item ,index) =>{
      return(
        <div className="card">
          
            <img className="card-img-top" src={item.urlToImage} alt="Card image cap"></img>
            <div className="card-body">
               <h5 className="card-title">{item.title}</h5>
               <p className="card-text">{item.description}</p>
               <a href={item.url} target="_blank" className="btn btn-primary">Read More</a>
            </div>   
        </div>
      )
    })}
    </div>
  </div>
  );
}
export default Weather;
