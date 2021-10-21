// import React, {Component} from 'react';

// export default class FilterString extends Component {
//     constructor() {
//         super();
    
//         this.state = {
//           names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
//           userInput: '',
//           filteredNames: []
//         };
//     }
    
//     handleChange(val) {
//         this.setState({ userInput: val });
//     }
    
//     filterNames(userInput) {
//         let names = this.state.names;
//         let filteredNames = [];
    
//         for ( var i = 0; i < names.length; i++ ) {
//             if ( names[i].includes(userInput) ) {
//                 filteredNames.push(names[i]);
//             }
//         }
//         this.setState({ filteredNames: filteredNames });
//     }
    
//     render() {
//         return (
//             <div className="puzzleBox filterStringPB">
//                 <h4> Filter String </h4>
//                 <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
//                 <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
//                 <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
//                 <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
//             </div>
//         )
//     }
// }
import React from 'react'
import { useState } from "react";

const FilterString = () => {
  let namesArr = [
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ];

  const [userInput, setUserInput] = useState("");
  const [filterText, setFilterText] = useState("Filtered Names: []");

  function clickHandler() {
    let newNamesArr = [];

    namesArr.forEach((name) => {
      if (name.includes(userInput)) {
        console.log("It did include");
        newNamesArr.push(" " + name);
      } else {
        console.log("This name wasn't pushed: ", name);
      }
    });

    console.log("this is the new array: ", newNamesArr);

    setFilterText(`Filtered Names: [${newNamesArr}]`);
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <p>
        Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer",
        "Mark", "Maddy" ]
      </p>
      <span className="puzzleText"></span>
      <input
        className="inputLine"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterStringRB">{filterText}</span>
    </div>
  );
};

export default FilterString;
