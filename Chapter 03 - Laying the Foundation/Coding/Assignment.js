import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";
import logo from "./logo.png";
import player from "./player.png";

/*
Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const Header = React.createElement(
    "div",
    {
        className: "Title",
        key: "title",
    },
    [
        React.createElement(
            "h1",
            {
                key: "h1",
            },
            "This is a h1 Tag"
            ),
            React.createElement(
                "h2",
                {
                    key: "h2",
                },
                "This is h2 Tag"
            ),
            React.createElement(
                "h3",
                {
                    key: "h3",
                },
                "This is h3 Tag"
            ),     
    ]
);
*/

/*
Q: Create same element using JSX
const header = (
    <div className="Title" key="title">
        <h1 key="h1">This is a h1 tag</h1>
        <h2 key="h2">This is a h2 tag</h2>
        <h3 key="h3">This is a h3 tag</h3>
    </div>
);
*/

/*
Q: Create a function component of the same with JSX and Pass attribute into the tag in JSX
const Header = () => {
    return (
        <div className="Title" key="title">
            <h1 style={{color: "blue"}} key="h1">This is a h1 tag</h1>
            <h2 style={{color: "palevioletred"}} key="h2">This is a h2 tag</h2>
            <h3 style={{color: "green"}} key="h3">This is a h3 tag</h3>
        </div>
    )
}
*/

/*
Q: Composition of Component (Add a component inside another)
const AnotherComponent = function(){
    return <h2> This is a Another Component </h2>
}

const Header = () => {
    return (
        <div className="Title" key="title">
            <h1 style={{color: "blue"}} key="h1">This is a h1 tag</h1>
            <h2 style={{color: "palevioletred"}} key="h2">This is a h2 tag</h2>
            <h3 style={{color: "green"}} key="h3">This is a h3 tag</h3>
            <AnotherComponent />
        </div>
    )
}


`{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent> </TitleComponent>}`
in JSX
*/


// const element = <h1>This is a React Element</h1>; //This is React Element or {TitleComponent}

// const TitleElement = () => {
//     return <h2 style={{color: "red"}}>This is a Title Element</h2>;
// }; // This is a Title Component;

/*
Q: Create a Header Component from scratch using Functional Component with JSX 
- Add a Logo on Left
- Add a seach bar in middle
- Add user icon on right
- Add CSS to make it look nice
*/

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="left">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="center">
                    <input 
                    className="input"
                    type="text"
                    placeholder="Search anything you want..."
                    />
                    <button type="submit">
                        submit
                    </button>
                </div>
                <div className="right">
                    <img src={player} alt="player logo"/>
                </div>
            </header>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);