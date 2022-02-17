import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/CountryCard";
import { Container, Grid, TextField, FormControl, InputLabel, MenuItem, Select, InputAdornment } from "@mui/material";
import TitleBar from "./components/TitleBar";
import {useTheme} from './Theme'
import SearchIcon from '@mui/icons-material/Search';


function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true)

//Grabbing all countries to display
  useEffect(() => {
      setLoading(true)
      let controller = new AbortController()
      axios.get("https://restcountries.com/v3.1/all", {signal: controller.signal})
      .then(res => {
          setLoading(false)
          setCountries(res.data)
      })

      return () => controller.abort()
  }, [])

  // theming
    const darkTheme = useTheme()
    document.body.style.backgroundColor = darkTheme ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)';
    const themeStyles = {
    backgroundColor: darkTheme ?  'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
    color: darkTheme ? 'hsl(0, 0%, 100%)' : ' hsl(200, 15%, 8%)',
}



  //changehandler
  const getByRegion = (event) => {
      axios.get(`https://restcountries.com/v3.1/region/${event.target.value}`)
      .then(res => setCountries(res.data))
  }
  const searchCountry = (event) => {
      axios.get(`https://restcountries.com/v3.1/name/${event.target.value}`)
      .then(res => setCountries(res.data))
  }

  if (loading) return "Loading..."
  return (
      <>
      {countries && (<>
      <TitleBar/>
      <Grid sx={{display: 'flex', justifyContent: 'space-between'}}>
      {/* search bar */}
      <TextField 
      sx={{m: 2}}
      onChange={searchCountry}
      label="Search for a country..." 
      InputProps={{
          startAdornment: (
              <InputAdornment position="start">
                  <SearchIcon fontSize='small' color='inherit' style={themeStyles}/>
              </InputAdornment>
          )
      }}
      />
      {/* filter menu */}
      <FormControl sx={{ m: 2, minWidth: 200 }} variant="outlined">
        <InputLabel id="filter-label" style={themeStyles}>Filter by Region</InputLabel>
        <Select
          labelId="filter-label"
          id="filter-by-region"
          value=''
          onChange={getByRegion}
          variant="outlined"
        >
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Container style={themeStyles}>
          <Grid container spacing={{xs: 2, sm: 3, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
              {
                  countries.map((country, i) => {
                      return (
                      <Grid item xs={4} sm={4} md={3} key={i}>
                          <Card
                              id={country.name.common} 
                              flag={country.flags.png}
                              name={country.name.common}
                              population={country.population.toLocaleString("en-US")}
                              region={country.region}
                              capital={country.capital}
                          />
                      </Grid>)
                  })
              }
          </Grid>
      </Container></>)}
      </>
);
}

export default App;