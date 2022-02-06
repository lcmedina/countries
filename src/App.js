import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/CountryCard";
import { Container, Grid, TextField } from "@mui/material";
import TitleBar from "./components/TitleBar";
import {useTheme} from './Theme'

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true)
 const [search, setSearch] = useState("");
//    const [searchResults, setSearchResults] = useState([])

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

    const darkTheme = useTheme()
    document.body.style.backgroundColor = darkTheme ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)';
    const themeStyles = {
    backgroundColor: darkTheme ?  'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)',
    color: darkTheme ? 'hsl(0, 0%, 100%)' : ' hsl(200, 15%, 8%)'
}

  const handleChange = (e) => {
      setSearch(e.target.value);
      console.log(search)
  }

  if (loading) return "Loading..."
  
  return (
      <>
      {countries && (<>
      <TitleBar/>
      <Container style={themeStyles}>
      <TextField 
      id="outlined-basic" 
      label="Search Country"
      variant="outlined"
      margin="normal"
      value={search}
      onChange={handleChange}
      />
          <Grid container spacing={{xs: 2, sm: 3, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
              {
                  countries.map((country, i) => {
                      return (
                      <Grid item xs={4} sm={4} md={3} key={i}>
                          <Card
                              id={country.name.common} 
                              flag={country.flags.png}
                              name={country.name.common}
                              population={country.population}
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