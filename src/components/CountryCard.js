import {useState, useEffect} from 'react'


const Card = ({ countries }) => {


    return (
        <div>
            {countries.map((country) => {
                return <div>
                <h1 key={country.name}>This is {country.name}</h1>
                </div>
            })}
        </div>
     );
}
 
export default Card;