// # Chapter 02 - Igniting our App


/*
*** Parcel Features ***
* Created A Server
* HMR - Hot Module Replacement
* File Watcher Algorithm - C++
* BUNDLING
* MINIFY
* Cleaning Our Code
* Dev and Production Build
* Super Fast build Algorithm
* Image Otmization
* Caching while developement
* Compression
* Compaitable with older version of browser
* Compaitable with older version of browser
* HTTPS on dev
* port Number
* Consistent Hashing Algorithm
* Zero Config
* Tree Shaking
* Transitive Dependensies
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id: "title",
    },
    "heading"
);


const heading1 = React.createElement(
    "h1",
    {
        id: "title",
    },
    "heading1"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading1]
);

// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);