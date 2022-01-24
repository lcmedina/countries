import { useEffect, useState } from "react"
import Card from "./CountryCard";
import { Container, Grid, TextField } from "@mui/material";
import TitleBar from "./TitleBar";


const Homepage = () => {
   const [countries, setCountries] = useState([]);
   const [search, setSearch] = useState("");
   const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        getCountries();

        async function getCountries() {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
        }

    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(search)
    }
    
    return (
        <>
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
        </Container>
        </>
);
}
 
export default Homepage;