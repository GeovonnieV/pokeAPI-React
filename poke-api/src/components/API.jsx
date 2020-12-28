import React, { useEffect } from "react";

const API = ({pokemon, setPokemon}) => {

    useEffect( () => {
        // make the api call to this address 
        fetch("https://pokeapi.co/api/v2/pokemon")
        // make it into a json format 
        .then(response => response.json())
        // data.results gives back what the API call gave to us 
        .then(data => {
            console.log(data.results)
            setPokemon(data.results);
        });
    }, [] )

    return(
        <div>
            <h1>Poke API!</h1>
            {/* pokemone display here */}
            <ul>
                {/* for each character in pokemon make an li with the name in it  */}
            {
                pokemon.map((character,index) => (
                    <li key={index}>{character.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default API;


// week 1: mon,wens
// week 3: mon
// week 4: all