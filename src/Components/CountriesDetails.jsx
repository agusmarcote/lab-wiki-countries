import { useParams } from "react-router-dom";
import './CountriesDetails.css'

function CountriesDetails(props) {
    const countries = props.countries
    const { countryId } = useParams()

    console.log(countryId)

    const selectedCountry = countries.find((country) => {
        return country.alpha3Code === countryId
    })

    console.log(selectedCountry.alpha2Code)
    return (
        <div className="detailsCountry">
            <div className="detailsCountryHeader">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} alt="" />
                <h2>{selectedCountry.name.common}</h2>
            </div>
            <div className="detailsCountryExtra">
                <h6>ID: {countryId}</h6>
                <h6>Capital: {selectedCountry.capital}</h6>
            </div>
        </div>
    )
}

export default CountriesDetails