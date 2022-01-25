import { Link } from "react-router-dom";

const Card = (props) => {

    return (
        <Link to={props.id}>
            <div className="details-sm" id={props.id}>
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