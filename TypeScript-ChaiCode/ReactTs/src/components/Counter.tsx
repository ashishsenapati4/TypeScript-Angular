import { useState } from "react";

export function Counter(){
    const[count, setCount] = useState<number>(0);
    return(
        <div>
            <h3>Item Ordered: {count}</h3>
            <button onClick={() => setCount((c) => c+1)}>
                Order One More
            </button>
        </div>
    )
}