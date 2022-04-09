import { useParams } from "react-router-dom";
import TitleBar from "./TitleBar";
import Details from "./Details";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../Theme";
import { Button } from "@mui/material";

//import '../App.css'


const DetailPage = () => {
    let { id } = useParams();
    const [details, setDetails] = useState();
    const [borderCountries, setBorderCountries] = useState();

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
        .then(res => {
            setDetails(res.data[0])
            setBorderCountries(res.data[0].borders)
        })
    }, [id])

    const darkTheme = useTheme();

    const buttonStyles = {
        backgroundColor: darkTheme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 98%)',
        color: darkTheme ? 'hsl(0, 0%, 100%)' : ' hsl(200, 15%, 8%)',
        margin: '5px',
        fontFamily: 'Nunito Sans',
        fontWeight: '600'
    }
    
    return ( 
        <>
        <TitleBar/>
        { details && <Details 
        name={details.name.common}
        flag={details.flags.svg}
        capital={details.capital}
        population={details.population.toLocaleString("en-US")}
        region={details.region}
        subregion={details.subregion}
        domain={details.tld}
        borders={borderCountries && borderCountries.map(item => {
            return <Button style={buttonStyles} size="small" variant="contained">{item}</Button>
        })}
         />}
        </>
     );
}
 
export default DetailPage;