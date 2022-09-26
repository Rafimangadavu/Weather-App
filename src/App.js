
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {

  const API_KEY = "d8940ba43d985c46dd49a6f95f1847df"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})

  const getWeatherDetails = (cityName)=>{
    if(!cityName) return
    
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    axios.get(apiURL).then((res)=>{
      console.log("response",res.data)
      setData(res.data)

    }).catch((err)=>{
      console.log("err",err);
    })
  }

  const handleChangeInput = (e) =>{
    setInputCity(e.target.value)
    console.log("Value", e.target.value);
  }

  const handleSerch=()=>{
    getWeatherDetails(inputCity)
    
  }


  return (
    <div className="col-md-12">
      <div className="weatherBg">
      <h1 className='heading'>Weather App</h1>

      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" className='form-control' value={inputCity} onChange={handleChangeInput} />
      <button className='btn btn-primary' type='button' onClick={handleSerch}>Serch</button>
      </div>
      </div>
{Object.keys(data).length>0 &&
      <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded weatherResultBox">
        
        <img className='weatherIcon' src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="" />

        <h5 className='weatherCity'>{data?.name}</h5>
        <h6 className="temperature">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>
    }
    </div>
    
  );
}

export default App;
