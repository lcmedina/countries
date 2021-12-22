const Card = (props) => {


    return (
        <div>
            <img src={props.flag} alt="Flag"/>
            <div className="details-sm">
                <h3>{props.name}</h3>
                <p><strong>Population:</strong> {props.population}</p>
                <p><strong>Region:</strong> {props.region}</p>
                <p><strong>Capital:</strong> {props.capital}</p>
            </div>
        </div>
     );
}
 
export default Card;