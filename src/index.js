// Import the React and ReactDOM libreries
import React from 'react';
import ReactDOM from 'react-dom';

// Creare a react componentt
const App = ()=>{
    return <div>
        Hi there!
    </div>
};

// Take the react component and show it on the screen
ReactDOM.render(
   <App /> ,
   document.querySelector('#root')
);
