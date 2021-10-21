import React, {Component} from 'react';
import { render } from "react-dom";

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
             evenArray: [],
             oddArray: [],
             userInput: ''
        }

    }

    handleChange(value) {
        this.setState({ userInput: value })
        console.log(value)
    }

    assignEvenAndOdds(userInput) {
        console.log(userInput)
        console.log(typeof userInput)
        let arr = userInput.split(',')
        let evens = []
        let odds = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i]))
            } else {
                odds.push(parseInt(arr[i]))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className='resultsBox'>Evens: {this.state.evenArray}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}

