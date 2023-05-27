// Manipulate the HTML DOM using javascript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
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