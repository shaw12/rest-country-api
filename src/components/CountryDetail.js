import React, { useContext } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import {FaLongArrowAltLeft} from 'react-icons/fa'
import './CountryDetail.css'
import { CountriesContext } from '../CountriesContext';

function CountryDetail() {

    const history = useHistory();
    const {countries} = useContext(CountriesContext)

    const {country} = useParams();
    console.log(country)

    const thisCountry = countries.find((count) => count.name === country);

    const goBack = () => {
        history.push('/');
        history.replace('');
        // history.goBack();
      };
    
    const goToCountry = (id) => {
        history.push(`/countries/${id}`)
    }

    if (thisCountry) {
        const {
          flag,
          name,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        } = thisCountry;
        console.log(thisCountry);
    


    const currencyElement = currencies
      .map((currency) => currency.name)
      .join(', ');
    const languagesElement = languages
      .map((language) => language.name)
      .join(', ');

    const fullCountry = borders.map((acronym) => {
    const full = countries.find((x) => x.alpha3Code === acronym);

    return full.name;
    });

    const bordersCountries = fullCountry.map((country) => {
    return (
        
    <div className="borders"
    onClick={() => goToCountry(country)}
    >
        {country}
    </div>
        
    );
    });

    return (
        <div>
            <div className="backButton"
            onClick={goBack}
            >
                <FaLongArrowAltLeft />
                Back
            </div>
            <div className="flag__details"> 
                <img className="flag_img" src={flag} alt={name} />
                <div className="details">
                    
                    <h1>{name}</h1>
                    <div className="details__main">
                        <div className="details__right">
                            <p><span>Native Name: </span>{nativeName}</p>
                            <p><span>Population: </span>{population}</p>
                            <p><span>Region: </span>{region}</p>
                            <p><span>Sub Region: </span>{subregion}</p>
                            <p><span>Capital: </span>{capital}</p>
                            
                        </div>
                        <div className="details__left">
                            <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                            <p><span>Currencies: </span>{currencyElement}</p>
                            <p><span>Languages: </span>{languagesElement}</p> 
                        </div>
                    </div>
                    <div className="bottom">
                        
                        
                        <span>Borders: </span> {bordersCountries}
                        
                            
                        
                    </div>
                </div>
            </div>
        </div>
    )
} else {
    return (
        <h1>Loading...</h1>
    )
}
}

export default CountryDetail
