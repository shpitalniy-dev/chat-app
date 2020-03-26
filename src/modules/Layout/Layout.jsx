import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App/index.js";
import PropTypes from "prop-types";
import Registration from "../Registration/index";
import Authorization from "../Authorization/index";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/app" component={App} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/" component={Authorization} />
                    </Switch>
                </Router >
            </>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.history.push("/app")}>Click me</button>
        )
    }
}