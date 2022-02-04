import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./CountryCard";
import { Container, Grid, TextField } from "@mui/material";
import TitleBar from "./TitleBar";


const Homepage = () => {
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

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(search)
    }

    if (loading) return "Loading..."
    
    return (
        <>
        {countries && (<>
        <TitleBar/>
        <Container>
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
export default Homepage;