import { useState } from "react";

export function Boardtables() {
    const [count, setCount] = useState(0);

    function updateCount1() {
        setCount(count + 1);
    }
    function updateCount2() {
        setCount(count + 2);
    }
    function updateCount3() {
        setCount(count + 3);
    }

    return (
        <section className="tables">    
        <div className="table">
          <h2>Team1</h2>
            <div className="result">
                <button>{count}</button>
            </div>
            <div className="pointsOne">
                <button onClick={updateCount1}>+1</button>
                <button onClick={updateCount2}>+2</button>
                <button onClick={updateCount3}>+3</button>
            </div>
        </div>
        <div className="colon">:</div>
        <div className="table">
          <h2>Team2</h2>
            <div className="result">
                <button>{count}</button>
            </div>
            <div className="pointsTwo">
                <button onClick={updateCount1}>+1</button>
                <button onClick={updateCount2}>+2</button>
                <button onClick={updateCount3}>+3</button>
            </div>
        </div>    
    </section>
    );
}