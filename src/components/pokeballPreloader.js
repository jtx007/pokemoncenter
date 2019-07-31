import React from 'react';
import pokeballLoaderStyles from "./pokeballPreloader.module.scss"

export default() => (
            <div className={pokeballLoaderStyles.pokeballLoader}>
                
                <div id={pokeballLoaderStyles.loading}>
                    <div className={pokeballLoaderStyles.pokeball} id={pokeballLoaderStyles.normal}></div>
                    <div className={pokeballLoaderStyles.pokeball} id={pokeballLoaderStyles.great}></div>
                    <div className={pokeballLoaderStyles.pokeball} id={pokeballLoaderStyles.ultra}></div>
                    <div className={pokeballLoaderStyles.pokeball} id={pokeballLoaderStyles.master}></div>
                    <div className={pokeballLoaderStyles.pokeball} id={pokeballLoaderStyles.safari}></div>
                </div>
            </div>
    )