"use strict";

import "purecss";

let component, props;

const React = require("react"),
    ReactDOM = require("react-dom"),
    FocusContainer = require("itsa-react-focuscontainer"),
    MultiSelect = require("./lib/component-styled.jsx");

props = {
    items: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    className: "months",
    emptyHTML: "Choose some Months...",
    onChange(newSelected) {
        props.selected = newSelected;
        render();
    },
    required: true,
    markRequired: true
};

const render = () => {
    ReactDOM.render(
         <MultiSelect {...props} />,
        document.getElementById("component-container")
    );
};

render();