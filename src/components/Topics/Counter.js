import React, { useState } from 'react';
import { render } from "react-dom";

function Counter() {

    const [count, setCount] = useState(0)


    const dCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    const iCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Counter</h4>
            <button onClick={dCount}> - </button>
            <span> {count} </span>
            <button onClick={iCount}> + </button>
        </div>
    );
}

export default Counter