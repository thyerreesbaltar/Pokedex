import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Home from "./pages/home";

export default function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Router>
    )
}