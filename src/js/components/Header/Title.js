import React from "react";

export default class Title extends React.Component {

    render() {
        return (
            <h1>Welcome Prop {this.props.title}</h1>
        );
    }
}