import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import countriesData from './countries.json'
import CountriesDetails from './Components/CountriesDetails';
import CountriesList from './Components/CountriesList';
import CountryAPI from './Components/CountryAPI';
import axios from 'axios'

const apiURL = "https://ih-countries-api.herokuapp.com/countries"



function App() {

  const [countries, setCountries] = useState([])

    useEffect(() =>{
        const apiCall = async () => {
            const res = await axios.get(apiURL)
            setCountries(res.data)
        }
        apiCall()
    }, [])



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/countries" element={<CountriesList countries={countries}/>}/>
        <Route path="/countries/:countryId" element={<CountriesDetails countries={countries}/>}/>
      </Routes>
    </div>
  );
}

export default App;
