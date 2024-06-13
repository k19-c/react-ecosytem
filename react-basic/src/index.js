import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// while creating first thing will be Element, second will be the Attributes, third will be the children

const ReactEle = React.createElement(
    "a",
    { href: "https://www.google.com", target: "_blank" },
    "click to visit the google"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
