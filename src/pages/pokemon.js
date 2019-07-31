import React, { Component, Fragment } from 'react'
import { graphql } from "gatsby";

import Layout from '../components/layout'
import Form from '../components/form'
import pokeApi from "../api/pokeapi"
import pokeDevProxy from "../api/pokeDevProxy"
import PokemonCard from '../components/pokemonCard'
import LargePokemonPanel from '../components/largePokemonPanel'


export default class Pokemon extends Component {

    state = {
        pokemon: null,
        pokemon2: null
    }



    onSearchSubmit = async (term) => {

        const response = await pokeApi.get(`${term.toLowerCase()}`)
        this.setState({
            pokemon: response.data
        })
        const response2 = await pokeDevProxy.get(`/?pokemon=${term.toLowerCase()}`)
        this.setState({
            pokemon2: response2.data[0]
        })

    }

    renderCard = () => {
        if (this.state.pokemon) {
            return (
            <Fragment>
                <LargePokemonPanel pokemon={this.state.pokemon2} pokeCard={this.state.pokemon} />
                <PokemonCard pokemon={this.state.pokemon} />
    
            </Fragment>
            )
        } 
    }


    render() {
        return (
            
                <div> 
                    <Layout>
                    </Layout>
                    <Form
                        submit={this.onSearchSubmit}
                        type={"text"}
                        label={this.props.data.site.siteMetadata.searchFormLabel}
                        buttonName = {"Submit"}
                        buttonType = {"submit"}
                    />
                    {this.renderCard()}
                    
                </div>
            
        )
    }
}

export const query = graphql`
    query {
        site {
        siteMetadata {
            searchFormLabel
        }
        }
    }`