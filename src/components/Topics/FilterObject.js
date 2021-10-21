import { Component } from "react";
import { render } from "react-dom";

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray = [{}],
            userInput = '',
            filteredArray = []
        }

    }


    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{ JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.filterEmployees(this.state.UserInput) }>Filter</button>
                <span className='resultsBox filterObjectRB'>{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }


}