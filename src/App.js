import React from "react";
import Weather from "./app_components/weather.component.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./app_components/form.component";
import "./App.css";
import { Alert } from 'reactstrap';
const API_key = "e4d4431929f441568bdcc6cc7b55f8cc";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
     articles: []   ,
     error : false,
     countryCodeError: false
    };
}
getCountryCode(C){
  switch (true) {
    case  C == "canada" || C =="Canada"|| C =="CANADA"  :
      return "ca";
      break;
    case C == "usa" || C =="USA" || C =="America" || C =="US" || C =="us": 
      return "us"
      break;
    case  C == "france" || C =="France"|| C =="FRANCE"  :
      return "fr";
      break;
    case  C == "germany" || C =="Germany"|| C == "GERMANY"  :
      return "de";
      break;
    case  C == "russia" || C =="Russia"|| C == "RUSSIA"  :
      return "de";
      break;  
    case  C == "turkey" || C =="Turkey"|| C == "TURKEY"  :
      return "tr";
      break;   
    default :

    return C  
  }
}
getNews  = async(e) => {
  e.preventDefault();
  const country = e.target.elements.country.value; 
  const countryCode=this.getCountryCode(country);
  if(country){
    const api_call = await fetch( "http://newsapi.org/v2/top-headlines?country="+countryCode+"&apiKey="+  API_key);
    const response = await api_call.json();
    console.log(response);
    if(response.articles.length === 0){
      console.log("Worng Country Code.")
      this.setState({countryCodeError : true})
    }else{
      this.setState({countryCodeError : false})
    }
    this.setState({
      articles : response.articles,
      error : false
    });
}
else{
  this.setState({error : true})
}
}
  render() {
    return (
      <div className = "App">
        {this.state.countryCodeError===true ? <Alert color="danger">
        Please enter a valid Country code <a href="https://newsapi.org/sources" target ="blank" className="alert-link">Click here</a>.To find your Country code.
         </Alert> : null}
        
        <Form 
          loadweather = {this.getNews} 
          error = {this.state.error}/>
        <Weather
          data ={this.state.articles}
       />
      </div>
    );
  }
}
export default App;
