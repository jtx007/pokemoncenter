import React, { Component } from 'react'
import formStyles from './form.module.css'


export default class Form extends Component {

    state = {
        input: ''
    }

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submit(this.state.input)
    }
    render() {
        return (
            <form className={formStyles.form} onSubmit={this.handleSubmit}>
                <label>{this.props.label}</label>
                <input
                onChange={this.handleInputChange}
                type={this.props.text}
                value={this.state.input}
                />
                <button type={this.props.buttonType}>{this.props.buttonName}</button>
            </form>
        )
    }
}