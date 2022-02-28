import { useParams } from "react-router-dom";
import TitleBar from "./TitleBar";
import Details from "./Details";
import { useEffect, useState } from "react";
import axios from "axios";

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
         />}
        </>
     );
}
 
export default DetailPage;