// # Chapter 04 - Talk is Cheap, Show me the code.

import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

/* My Food App structure will look like this,
: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurant card
                    - Image
                    - Name
                    - Rating
            3) Footer
                -Link
                - Copyrights 
*/










// Body Component for body section: It contain all restaurant cards
// we are mapping restaurantList array and passing data to restaurantCard Component as props with unique key as index



// AppLayout comIMG_CDN_URLponent to show: Header, Body, Footer
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);