import React from 'react';
import pokeCardStyles from './pokemonCard.module.css'
import PokeBallPreLoader from './pokeballPreloader'
const renderStats = (stats) => {
    return stats.map(pokeStat => {
        return (
            <li key={pokeStat.stat.name}>
                {pokeStat.stat.name.toUpperCase()}: {pokeStat.base_stat}
            </li>
        )
    })
}

export default({ pokemon }) => {
    if (!pokemon) {
        return <PokeBallPreLoader />
    }
    return (
        
        <div className={pokeCardStyles.card}>
            <h2 style={{textAlign: "left", marginLeft: "10px"}}>{pokemon.name.toUpperCase()}</h2>
            <div className={pokeCardStyles.cardContent}>
                <div className={pokeCardStyles.pokeImgGallery}>
                    <img className={pokeCardStyles.pokeImg} alt={`${pokemon.name}-front`} src={pokemon.sprites.front_default} />
                    <img className={pokeCardStyles.pokeImg}  alt={`${pokemon.name}-back`} src={pokemon.sprites.back_default} />
                    <img className={pokeCardStyles.pokeImg} alt={`${pokemon.name}-frontShiny`} src={pokemon.sprites.front_shiny} />
                    <img className={pokeCardStyles.pokeImg} alt={`${pokemon.name}-backShiny`} src={pokemon.sprites.back_shiny} />
                </div>
            <ul className={pokeCardStyles.statList}>
                {renderStats(pokemon.stats)}
            </ul>
            </div>
        </div>
    )
}