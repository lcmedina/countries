import { Grid } from "@mui/material";


const Details = (props) => {
    return ( 
       <>
           <Grid container spacing={{xs: 2, sm: 3, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
               <Grid item xs={12} sm={7}>
                   <div id="details-flag"><img src={props.flag} alt={`Flag of ${props.name}.`}/></div>
               </Grid>
               <Grid item xs={12} sm={5}>
                   <h1>{props.name}</h1>
                   <p><strong>Native Name:</strong> {props.native}</p>
                   <p><strong>Population:</strong> {props.population}</p>
                   <p><strong>Region:</strong> {props.region}</p>
                   <p><strong>Subregion:</strong> {props.subregion}</p>
                   <p><strong>Capital:</strong> {props.capital}</p>
                   <p><strong>Top Level Domain:</strong> {props.domain}</p>
                   <p><strong>Currencies:</strong> {props.currency}</p>
                   <p><strong>Languages:</strong> {props.language}</p>
               </Grid>
           </Grid>
       </>
     );
}
 
export default Details;