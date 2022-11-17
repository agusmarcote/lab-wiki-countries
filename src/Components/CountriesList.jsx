import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountriesList (props){
    const [countries, setCountries] = useState([])

    useEffect(()=> {
        setCountries(props.countries)
     }, [])

    return(
        <div>
            <h1>List of Countries</h1>
            {countries.map((country)=>{
                return (
                    <div key={country.alpha3Code}>
                        <Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link>
                    </div>
                )
            })}
        </div>
    )
}


export default CountriesList