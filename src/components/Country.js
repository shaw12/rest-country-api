import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { CountriesContext } from '../CountriesContext';
import './Country.css' 
import {usePromiseTracker} from 'react-promise-tracker'

function Country() {

    const {countries,filter, selectFilter} = useContext(CountriesContext)
    const {promiseInProgress} = usePromiseTracker();

    const history = useHistory();

    const selectChannel = (id) => {
        if(id){
            history.push(`/countries/${id}`);
        } 
    }

    const newCountries = countries.filter(
        (d) => d.name !== "Bouvet Island"
    );

    const countriesFiltered = newCountries
    .filter((d) => {
        if(selectFilter === 'All') return d;

        if(d.region === selectFilter) {
            return d
        } else {
            return null
        }

    })
    .filter((d) => {
        if(filter === '') return d

        if(d.name
            .toString()
            .toLowerCase()
            .includes(filter.toString().toLowerCase())
        ){
            return d
        } else {
            return null
        }
    })


    return (
        
        <div className="main">
            {
                promiseInProgress === true ?
                (
                    <h1>Loading...</h1>
                ) : (
                    countriesFiltered.map((d) => (
                        <div 
                        className="card" 
                        key={d.population}
                        onClick={() => selectChannel(d.name)}
                        >
                            <div className="card__head">
                            <img src={d.flag} alt={d.name} />
                            </div>
                            <div className="card__body">
                                <h3>{d.name}</h3>
                                <p><span>Population: </span>{d.population}</p>
                                <p><span>Region: </span>{d.region}</p>
                                <p><span>Capital: </span>{d.capital}</p>
                            </div>
                        </div>
                    ))
                )
            
            }
        </div>
    )
}

export default Country