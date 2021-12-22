const Card = (props) => {


    return (
        <div>
            <div className="details-sm">
            <div className="img-div"><img src={props.flag} alt="Flag"/></div>
                <h3>{props.name}</h3>
                <p><strong>Population:</strong> {props.population}</p>
                <p><strong>Region:</strong> {props.region}</p>
                <p><strong>Capital:</strong> {props.capital}</p>
            </div>
        </div>
     );
}
 
export default Card;