import React , {useState} from 'react';
import axios from 'axios';
import getLanguages from "../files/languages";

function Translate({setCurrentPage}) {

  setCurrentPage("Translate");

  const [sourceMessage, setSourceMessage] = useState("");
  const [translatedMessage, setTranslatedMessage] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("");



  const translateHandler = () =>{
    const encodedParams = new URLSearchParams();
    encodedParams.append("source", sourceLanguage);
    encodedParams.append("target", targetLanguage);
    encodedParams.append("q", sourceMessage);

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '0534c28142mshb7aaebea3ae60ffp138dcfjsnc7e995eb20f3'
      },
      data: encodedParams
    };



    axios.request(options).then(function (response) {
      setTranslatedMessage(response.data["data"]["translations"][0]['translatedText']);
      console.log(response.data["data"]["translations"][0]['translatedText'])
    }).catch(function (error) {
      console.error(error);
    });
  }

  const targetLanguageHandler = (e) => {
    setTargetLanguage(e.target.value);
  }

  const inputHandler = (e) => {
    setSourceMessage(e.target.value)
  }

  return (
    <div>
      <h1 className="text-center">Translate Page</h1>
      <input className={`form-control`} type="text" onChange={inputHandler}/>
      <select className={`form-control`} onChange={targetLanguageHandler}>
        <option value="">Please select language</option>
        {getLanguages().map(element => {
          return <option value={element.language} key={element.language}>{element.name}</option>
        })}
      </select>
      <button type="button" className={`${(targetLanguage === ""? "disabled": "")} btn btn-primary`} onClick={translateHandler}>Translate</button>
      <h5>{translatedMessage}</h5>

    </div>
  );
}

export default Translate;
