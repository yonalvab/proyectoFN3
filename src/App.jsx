
import { CincoDias } from './components/CincoDias'
import { FirstScreenM } from './components/FirstScreenM'
import { DiasWeather } from './components/DiasWeather'

import './index.css'
import { ItemsHightlights } from './components/Hightlights'
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([])
  const [locationData, setLocationData] = useState([])
  const [fiveDias, setFiveDias] = useState([])

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        showPosition(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }
  }


  function showPosition(latitude, longitude) {
    /* let latitude = position.coords.latitude;
    let longitude = position.coords.longitude; */

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=50190eef3e296f96a01443fef5b879f6`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(apiData => {
        setData(apiData)
        console.log(data)
        setLocationData(apiData)
        cincoDias(latitude, longitude)
        /* console.log(apiData) */

      })
      .catch(error => {
        console.error('Ocurrió un error:', error);
      });
  }

  function cincoDias(latitude, longitude) {

    const apiUrl5 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=50190eef3e296f96a01443fef5b879f6`

    fetch(apiUrl5)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(apiData5 => {
        let today = new Date()
        const rsF = apiData5.list.filter(day => {
          let date = dateFormato(day.dt)
          if (date.getDate() > today.getDate() || date.getMonth() > today.getMonth() || date.getFullYear > today.getFullYear()) {
            today = date
            return day
          }
        })
        setFiveDias(rsF)
      })
      .catch(error => {
        console.error('Ocurrió un error:', error);
      });
  }

  useEffect(() => {
    getLocation()
  }, [])

  const dateFormato = (date) => {
    let fecha = new Date(date * 1000)
    return fecha
  }

  const changeToFahrenheit = () => {
    const newTemp = { ...data, ...fiveDias }
    const fahrenheit = (newTemp.main.temp * 9 / 5) + 32
    newTemp.main.temp = fahrenheit
    setData(newTemp)
  }

  const changeToCelsius = () => {
    const newTemp = { ...data };
    const celsius = (newTemp.main.temp - 273.15);
    newTemp.main.temp = celsius;
    setData(newTemp);
    changeToC5(); // nada
  };

  const changeToC5 = () => {
    if (fiveDias && fiveDias.list) {
      const newTemp5 = { ...fiveDias };
      const newDataList = newTemp5.list.map(item => {
        const celsius = item.main.temp_max - 273.15;
        return {
          ...item,
          main: {
            ...item.main,
            temp_max: celsius
          }
        };
      });
      newTemp5.list = newDataList;
      setFiveDias(newTemp5);
    }
  };

  const dateFormatoFechas = (dateString) => {
    const date = new Date(dateString * 1000);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];

    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthName}`;

    return formattedDate;
  }

  const ImgClimas = ({ icon }) => {
    let value = icon.slice(0, icon.length - 1)
    return <img className=' w-14 h-[50px] ' src={`/iconos/${value}.png`} alt="dias" />
  }

  function changeToLondon() {
    const londonLatitude = 51.5074;
    const londonLongitude = -0.1278;
    showPosition(londonLatitude, londonLongitude);
  }

  function changeToBarcelona() {
    const barcelonaLatitude = 41.3888;
    const barcelonaLongitude = 2.159;

    showPosition(barcelonaLatitude, barcelonaLongitude);

  }

  function changeToLongBeach() {
    const longBeachLatitude = 33.7701;
    const longBeachLongitude = -118.1937;

    showPosition(longBeachLatitude, longBeachLongitude);

  }

  return (
    <main  >
      <div className=' sm:flex ' >
        <FirstScreenM weatherData={data} getLocation={getLocation} fechaHoy={dateFormatoFechas} changeToLondon={changeToLondon} changeToBarcelona={changeToBarcelona} changeToLongBeach={changeToLongBeach} />
        <div className=' h-[1718px] bg-[#100E1D] sm:w-[981px] 
        sm:h-[1023px] sm:p-[70px] ' >
          <div className='hidden sm:flex sm:justify-end sm:gap-5 sm:px-[60px] ' >
            <button className=' w-[40px] h-[40px] rounded-full bg-[#585676] text-[#E7E7EB] ' onClick={changeToCelsius} >°C</button>
            <button className=' w-[40px] h-[40px] rounded-full bg-[#585676] text-[#E7E7EB] ' onClick={changeToFahrenheit} >°F</button>
          </div>
          <CincoDias  >
            {
              fiveDias && fiveDias.map(clima =>
                <DiasWeather
                  key={clima.dt}
                  title={dateFormatoFechas(clima.dt)}
                  tempMax={Math.round(clima.main.temp_max - 273.15)}
                  tempMin={Math.round(clima.main.temp_min - 273.15)}
                >
                  <ImgClimas icon={clima?.weather[0]?.icon} />
                </DiasWeather>
              )
            }
          </CincoDias>
          <div>
            <h1 className=' text-[#E7E7EB] font-raleway font-bold text-[24px] mb-8 ml-[21px] 
            sm:ml-14 ' >Today’s Hightlights</h1>
            <ul className=' flex flex-col gap-7 justify-center items-center 
            sm:grid sm:grid-cols-2 sm:px-10 sm:gap-14 sm:ml-[10px]  ' >
              <ItemsHightlights weatherData={data} locationData={locationData} />
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

