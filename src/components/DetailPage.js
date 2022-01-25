import { useParams } from "react-router-dom";
import TitleBar from "./TitleBar";
import Details from "./Details";
import useFetch from "./useFetch";

const DetailPage = () => {
    let { id } = useParams();
    
    const {data: details, error} = useFetch('https://restcountries.com/v3.1/name/' + id);
    console.log(details)
    return ( 
        <>
        <TitleBar/>
        { error && <div>{ error }</div> }
        { details && <Details 
        name={details[0].name.common}
        flag={details[0].flags.svg}
        capital={details[0].capital}
        population={details[0].population}
        region={details[0].region}
        subregion={details[0].subregion}
        domain={details[0].tld}
         />}
        </>
     );
}
 
export default DetailPage;