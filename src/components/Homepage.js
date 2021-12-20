import { useEffect, useState } from "react"
import Card from "./CountryCard";


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
        <div>
            <h1>List of Countries</h1>
            {
                countries.map((country, i) => {
                    return (<div key={i}>
                    <p>{country.name.common}</p>
                    </div>)
                })
            }
        </div>
     );
}
 
export default Homepage;