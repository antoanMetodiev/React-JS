import { useState } from "react";

export default function Counter(props) {
   const [state, setState] = useState(0);

   function onClick() {
        setState(state + 1);
   }

    return (
        <div> 
            <h3 className="h3-Element">{state}</h3>
    
            <button onClick= {onClick}>Click Me</button>

            <code>
                console.log('asdsa');
            </code>
        </div>
        
    );
};