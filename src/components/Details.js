import { Grid } from "@mui/material";
import { useTheme } from "../Theme";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


const Details = ({ flag, name, population, region, subregion, capital, domain, borders }) => {
    const darkTheme = useTheme();
    document.body.style.backgroundColor = darkTheme ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)';
    const themeStyles = {
        backgroundColor: darkTheme ?  'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
        color: darkTheme ? 'hsl(0, 0%, 100%)' : ' hsl(200, 15%, 8%)',
        fontSize: '16px'
    }
    const buttonStyles = {
        backgroundColor: darkTheme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 98%)',
        color: darkTheme ? 'hsl(0, 0%, 100%)' : ' hsl(200, 15%, 8%)',
        marginBottom: '20px',
        fontFamily: 'Nunito Sans',
        fontWeight: '600'
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }


    return ( 
       <>
               <Button 
               variant="contained" 
               startIcon={<ArrowBackIcon/>} 
               style={buttonStyles}
               onClick={handleClick}
               size="large">Back</Button>
           <Grid container spacing={{xs: 2, sm: 3, md: 3}} columns={{xs: 4, sm: 8, md: 12}} style={themeStyles}>
               <Grid item xs={12} sm={7}>
                   <div id="details-flag"><img src={flag} alt={`Flag of ${name}.`}/></div>
               </Grid>
               <Grid item xs={12} sm={5}>
                   <h1>{name}</h1>
                   <p><strong>Population:</strong> {population}</p>
                   <p><strong>Region:</strong> {region}</p>
                   <p><strong>Subregion:</strong> {subregion}</p>
                   <p><strong>Capital:</strong> {capital}</p>
                   <p><strong>Top Level Domain:</strong> {domain}</p>
                   <p><strong>Border Countries: </strong>{borders}</p>
               </Grid>
                
           </Grid>
       </>
     );
}
 
export default Details;