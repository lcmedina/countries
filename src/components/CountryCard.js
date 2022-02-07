import { Link } from "react-router-dom";
import { useTheme } from "../Theme";

const Card = (props) => {

    const darkTheme = useTheme();
    const themeStyles = {
        boxShadow: darkTheme ? '1px 1px 1px hsl(209, 23%, 22%)' : '1px 1px 1px hsl(0, 2%, 87%)',
        backgroundColor: darkTheme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
    }

    return (
        <Link to={props.id} style={{color: 'inherit', textDecoration: 'inherit'}}>
            <div className="details-sm" id={props.id} style={themeStyles}>
               <div className="img-div"><img src={props.flag} alt="Flag"/></div>
                <h3>{props.name}</h3>
                <p><strong>Population:</strong> {props.population}</p>
                <p><strong>Region:</strong> {props.region}</p>
                <p><strong>Capital:</strong> {props.capital}</p>
            </div>
        </Link>
     );
}
 
export default Card;