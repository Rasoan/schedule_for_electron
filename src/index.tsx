'use strict';


import Main from "./components/Main/Main";
import React from "react";
import ReactDOM from "react-dom/client";

{
    const root = document.createElement('div');

    root.id = 'root';
    document.body.appendChild(root);
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
