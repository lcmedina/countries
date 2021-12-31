import { A } from "hookrouter";

const Card = (props) => {

    return (
            <div className="details-sm">
               <A href="/details" className="Link"> <div className="img-div"><img src={props.flag} alt="Flag"/></div> </A>
                <h3>{props.name}</h3>
                <p><strong>Population:</strong> {props.population}</p>
                <p><strong>Region:</strong> {props.region}</p>
                <p><strong>Capital:</strong> {props.capital}</p>
            </div>
     );
}
 
export default Card;