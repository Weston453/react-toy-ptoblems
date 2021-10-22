import React, { useState } from 'react'

const Counter2 = () => {
    
    const [count, setCount] = useState(0)

    let dCount = () => {
        setCount(banana => banana -1)
    }
    
    let d5Count = () => {
        setCount(apple => apple -5)
    }

    let d10Count = () => {
        setCount(Orange => Orange - 10)
    }

    let iCount = () => {
        setCount(banana => banana + 1)
    }

    let i5Count = () => {
        setCount(apple => apple + 5)
    }

    let i10Count = () => {
        setCount(Orange => Orange + 10)
    }


    return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Counter Practice</h4> 
            <button onClick={d10Count}> -10 </button>
            <button onClick={d5Count}> -5 </button>
            <button onClick={dCount}> -1 </button>
            <span> {count} </span>
            <button onClick={iCount}> +1 </button>
            <button onClick={i5Count}> +5 </button>
            <button onClick={i10Count}> +10 </button>
        </div>
    )
}

export default Counter2
