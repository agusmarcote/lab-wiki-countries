import axios from 'axios'
import React, { useState, useEffect } from 'react'


const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function CountryAPI (){

    const [country, setCountry] = useState([])

    useEffect(() =>{
        const apiCall = async () => {
            const res = await axios.get(apiURL)
            setCountry(res.data)
        }

        apiCall()
    }, [])

    return(
        <div>

        </div>
    )
}

export default CountryAPI