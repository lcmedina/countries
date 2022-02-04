import { Grid } from "@mui/material";


const Details = ({ flag, name, native, population, region, subregion, capital, domain, currency, language }) => {
    return ( 
       <>
           <Grid container spacing={{xs: 2, sm: 3, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
               <Grid item xs={12} sm={7}>
                   <div id="details-flag"><img src={flag} alt={`Flag of ${name}.`}/></div>
               </Grid>
               <Grid item xs={12} sm={5}>
                   <h1>{name}</h1>
                   <p><strong>Native Name:</strong> {native}</p>
                   <p><strong>Population:</strong> {population}</p>
                   <p><strong>Region:</strong> {region}</p>
                   <p><strong>Subregion:</strong> {subregion}</p>
                   <p><strong>Capital:</strong> {capital}</p>
                   <p><strong>Top Level Domain:</strong> {domain}</p>
                   <p><strong>Currencies:</strong> {currency}</p>
                   <p><strong>Languages:</strong> {language}</p>
               </Grid>
           </Grid>
       </>
     );
}
 
export default Details;