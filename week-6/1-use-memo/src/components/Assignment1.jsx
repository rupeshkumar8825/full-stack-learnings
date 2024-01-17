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
//                         SIDE EFFECTS 
// #################################################################################################
// #################################################################################################
// 1. anything which are not rendering are considered as the side effects 
// 2. for example we are fetching the data from the backend then also it is called as side effects 
// 3. if we set setime interval or set timeout and so on. All will be considered as the side effects
// 4. hence in summary, in react the concept of side effects encompasses any operations that reach outside the functional
// scope of a react Component. 
// 5. these operations can affect other components, interact with the browser, or perform asynchronous data fetching 
// 6. hence the example of sideeffects are setTimeout, setInterval , fetch, or manupulating the dom using document.getelementbyid




// #################################################################################################
// #################################################################################################
//                         REACT HOOKS 
// #################################################################################################
// #################################################################################################
// 1. this is the feature which was introduced in react 16.8
// 2. this enables functional components to have access to stateful logic and lifecycle features
// 3. lot of features which were previously only possible in class components, now they can be used inside the functional components also 
// 4. lead more concise and more readable way of writing components in react. 
// 5. some common hooks are ==> useState, useEffect, useCallback, useMemo, useRef, useContext and so on
// 6. we can create our own custom made hooks as well 

// #################################################################################################
// #################################################################################################
//                         useEffect Hook 
// #################################################################################################
// #################################################################################################
// 1. it allows us to perform side effects in function components. 
// 2. side effects are operations that can affect other components or can't be done during rendering, such as data fetching, susbcriptions, or manually changing the DOM in the react components for this purpose 
// 3. this serves the same purpose as `componentDidMount`, 'componentDidUpdate' and 'componentWillUnMount' in the react class components 



// #################################################################################################
// #################################################################################################
//                         useMEMO Hook 
// #################################################################################################
// #################################################################################################
// 0. it means remembering some output given an input and not computing it again and again. Same as DP in DSA 
// 1. this is a inbuilt hooks in react which is used for memoization. 
// 2. This helps in optimization technique to improve the performance of react component 
// 3. Memoization involves caching the results of complex logic. If we will cache then we can optimize the re-rendering of the comps
// 4. similarly in the react also it remembers the state of the component props. 
// 5. if the components props changes then only it will re-render the component otherwise it will not 
// 6. this is commonly used whenever the two states values are dependent on each other. 
// 7. suppose we have to two state variables which are dependent on each other then instead of using the useeffect we can use the useMemo hook. This way we will be able to avoid extra re-render of the component and also we will be able to avoid new extra state variable 





// #################################################################################################
// #################################################################################################
//                         useCALLBACKS HOOK 
// #################################################################################################
// #################################################################################################
// this is also a technique to optimize the performance of the react application for this purpose 
// this is mainly used to avoid unnecessary re-rendering in the react applications. This optimization is done basically on the 
// functions. we know functions are first class functions that means it can be treated as the variable itself for this purpose 
// 1. when a component re-renders, every function inside of the component is recreated and 
// 2. therefore these function's references change between renders 
// 3. usecallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed
// 4. so it will not recreate the function again and again on every re-render of the react component for this purpose 
// 5. used to memoize functions, which can help  in optimizing the performance of your application, especially involving child components that rely on reference equality to prevent unnecessary renders