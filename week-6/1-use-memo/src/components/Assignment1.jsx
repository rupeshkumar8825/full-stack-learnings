import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = 0; 
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}



// ##################################################################################
// ##################################################################################
// LEARNINGS ARE MENTIONED HERE 
// ##################################################################################
// ##################################################################################
// in this we will be learning about usememo hook to know where we can use this 

// the re render of the component happens in the following conditions : 
//     1. a state variable has changed 
//     2. A parent component re-render triggers all children re-rendering. 

// #################################################################################################
// #################################################################################################
//                         RECONCILATIONS 
// #################################################################################################
// #################################################################################################
// 1. when the component state changes or props changes, then react re-renders the component
// 2. it creates a new virtual DOM
// 3. it compares the new virtual DOM with the previous virtual DOM 
// 4. determine the minimum number of changes necessary to update the actual DOM.
// 5. The above process is called as the reconcilation 
// 6. react uses the efficient algorithm to compare the virtual DOM trees and determine which parts of the actual DOM need to be updated
// 7. if there are no new changes then the react can use the previous virtual DOM itself instead of creating a new one for this purpose 
// 8. Diffing is the name of the process determining the differences between the two virtual DOM trees in React 
// if there are multiple component who will be using the same state together then it is better to define it 
// in the just previous or most recent component for this purpose. the more we push the state to the deeper then we will 
// avoid unnecessary re rendering 


// #################################################################################################
// #################################################################################################
//                         USEMEMO 
// #################################################################################################
// #################################################################################################

// 1. this is a inbuilt hooks in react which is used for memoization. 
// 2. This helps in optimization technique to improve the performance of react component 
// 3. Memoization involves caching the results of complex logic. If we will cache then we can optimize the re-rendering of the comps
// 4. similarly in the react also it remembers the state of the component props. 
// 5. if the components props changes then only it will re-render the component otherwise it will not 




// #################################################################################################
// #################################################################################################
//                         SIDE EFFECTS 
// #################################################################################################
// #################################################################################################
