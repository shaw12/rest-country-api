import React, { useContext, useState } from 'react'
import './InputSearch.css'
import {CountriesContext} from '../CountriesContext'
import {AiOutlineSearch} from 'react-icons/ai'

function InputSearch() {

  const { setFilter, setSelectFilter, selectFilter, setWriteCountry } = useContext(
    CountriesContext
  );
    
    const [selectCont, setSelectCont] = useState('Filter by Region')
    const [setInp, setSetInp] = useState('')

    const onRegionChnage = async (e) => {
      setSelectCont(e.target.value);
      setSelectFilter(e.target.value);
    }

    const onInputChange = (e) => {
      setFilter(e.target.value)
      setSetInp(e.target.value)
    }

    return (        
    <div className="dynamic">
        <div className="input-search">
          <AiOutlineSearch className="search-icon" />
          <input 
            type="text" 
            className="input"
            placeholder="Search for a country..."
            value={setInp}
            onChange={onInputChange} 
            />
        </div>

        <div className="select-search">
          <select 
            className="select-country"
            onChange={onRegionChnage}
            value={selectCont}
            >
            <option className="options" selected value='All'>Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    </div>
    
    )
}

export default InputSearch
