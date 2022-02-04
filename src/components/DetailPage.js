import { useParams } from "react-router-dom";
import TitleBar from "./TitleBar";
import Details from "./Details";
import { useState } from "react";
import axios from "axios";

const DetailPage = () => {
    let { id } = useParams();
    const [details, setDetails] = useState()

    axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
    .then(res => {
        setDetails(res.data)
    })

    return ( 
        <>
        <TitleBar/>
        { details && <Details 
        name={details[0].name.common}
        flag={details[0].flags.svg}
        capital={details[0].capital}
        population={details[0].population}
        region={details[0].region}
        subregion={details[0].subregion}
        domain={details[0].tld}
        currency={details[0].currencies.name} />}
        </>
     );
}
 
export default DetailPage;