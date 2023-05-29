// # Chapter 03 - Laying the Foundation
import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

// Create Header element like navbar using createElement
/*
*
<div class = "header">
    <h1>Title</h1>
    <ul>
        <li>Home</li>
        <li>About us</li>
    </ul>
</div>
*
*/

/*
*
const heading = ce(
    "div",
    {
        className: "header",
        key: "header",
    },
    [ce(
        "h1",
        {
            key: "Title",
        },
        "Title"), ce(
            "ul",
            {
                key: "ul",
            },
            [ce(
                "li",
                {
                    key: "Home",
                },
                "home"
            ),ce(
               t Error: Cannot find module 'react/jsx-dev-ru "li",
                {
                    key: "About us",
                },
                "About us")])]
    );
*
*/

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)

const heading = (
    <h1 id="h1" key="h1">
        This is JSX
    </h1>
);

// React Component
// Functional component - new way of writinbg component
// Class component - old way of writing component

// Title Component is a functional component
const Title = () => {
    return (
        <h1 id="title" key="title">Namaste React</h1>
    )
}

// Header Component is functional component
const HeaderComponent = function (){
    return (
        <div>
            <Title />
            {/* we can also use <Title()> */}
            {console.log(10)}
            <h1>Namaste React Functional component</h1>
            <h2>This is  h2 tag</h2>
        </div>
    )
}

// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);