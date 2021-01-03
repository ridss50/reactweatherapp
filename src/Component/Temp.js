import React, { useState, useEffect } from "react";
import "./css/style.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div>
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        <div className='InputBox'>
          <input
            type='search'
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className='errorMsg'>
            <i className='far fa-frown-open'></i>&nbsp; No Data Found
          </p>
        ) : (
          <div className='info'>
            <h2 className='location'>
              <i className='fas fa-street-view'></i>&nbsp; {search}
            </h2>
            <h3 className='temp'>{city.temp}&deg; Cel</h3>
            <h4>
              Min : {city.temp_min}&deg; Cel | Max : {city.temp_max}&deg; Cel
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Temp;
