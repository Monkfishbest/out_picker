import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () =>{

    return (
        <header>
            <h1>~OutPicker~</h1>
            <a>About</a>
            <a>Recent Matches</a>
            <a>Saved Matches</a>
        </header>
    )



}

export default Header