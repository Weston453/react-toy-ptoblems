import { Component } from "react";
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

