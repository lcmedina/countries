import { useEffect, useState } from "react"
import Card from "./CountryCard";
import { Container, Grid } from "@mui/material";
import TitleBar from "./TitleBar";


const Homepage = () => {
   const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries();

        async function getCountries() {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
        }
    }, [])
    
    return (
        <>
        <TitleBar/>
        <Container>
            <Grid container spacing={{xs: 2, sm: 3, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {
                    countries.map((country, i) => {
                        return (
                        <Grid item xs={4} sm={4} md={3} key={i}>
                            <Card 
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