import React,{ useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries,setFetchedCountries] = useState([]);


  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    }

    fetchCountries();
  },[setFetchedCountries])

  // useEffect'e verdiğimiz ikinci parametre sayesinde useEffect sadece o parametredeki değer değiştiğinde çalışacak aksi taktirde sürekli çalışır.
  console.log(typeof fetchedCountries)


  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country,index) => <option key={index} value={country.name}>{country.name}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
