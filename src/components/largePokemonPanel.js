import React from 'react';
import largePokePanelStyles from './largePokemonPanel.module.css'
import PokemonCard from './pokemonCard'
import PokeBallPreLoader from './pokeballPreloader'


export default({ pokemon, pokeCard }) => {
    if (!pokemon) {
        return <PokeBallPreLoader />
    }
    console.log(pokemon)
    return (
    <div className={largePokePanelStyles.panel}>
        <h1>#{pokemon.number} {pokemon.name}</h1>
        <figure className={largePokePanelStyles.pokeImg}>
            <img  alt={`large ${pokemon.name}`} src={pokemon.sprite} />
            <figcaption className={largePokePanelStyles.pokeImgCaption}>{pokemon.description}<img alt="pokeball-shaped-period" className={largePokePanelStyles.pokePeriod} src="https://img.icons8.com/color/14/000000/mega-ball.png"/></figcaption>
        </figure>
        <div className={largePokePanelStyles.pokeFacts}>
            {pokemon.legendary ?  <p>Legendary</p> : null}
            {pokemon.starter ? <p>Starter</p> : null}
            <p>Gen: {pokemon.gen}</p>
            <p>Species: {pokemon.species}</p>
            <p>Type(s): {pokemon.types.join('/')}</p>
            <p>Special Ability: {pokemon.abilities.normal[0]}</p>
            <p>Hidden Ability: {pokemon.abilities.hidden[0]}</p>
            <p>Height: {pokemon.height}</p>
        </div>
        <PokemonCard pokemon={pokeCard} />
    </div>
    )
}