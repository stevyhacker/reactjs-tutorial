import React from "react";

import {Link} from "react-router";


export default class Layout extends React.Component {
    navigate() {
        console.log(this.props);
        this.props.history.replace(null, "/");
    }

    render() {

        const {history} = this.props;
        console.log(history.isActive("archives"));

        return (
            <div>
                <h1>TutorialNews.net</h1>
                {this.props.children}
                <Link to="archives" activeClassName="test">
                    <button className="btn btn-danger">archives</button>
                </Link>
                <Link to="settings">
                    <button className="btn btn-success">settings</button>
                </Link>
                <button onClick={this.navigate.bind(this)}>featured</button>
            </div>
        );
    }
}