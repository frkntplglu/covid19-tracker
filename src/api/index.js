import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;
  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  try{

    // Burada direkt destructure yaparak sonrasında response.data yapmakta kullandık.
    const { data } = await axios.get(changeableUrl);

    // Data icerisindeki herseye ihtiyacimiz olmadigi icin modifiye ettik.
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    }

    return modifiedData
  }
  catch(error){
    console.log(error)
  }
}


export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    
    return modifiedData;
  }
  catch(error){
    console.log(error);
  }
}


export const countries = async () => {
  try{
    const {data: {countries}} = await axios.get(`${url}/countries`);
    console.log(countries);
    return countries;
  }
  catch(error){
    console.log(error)
  }
}


