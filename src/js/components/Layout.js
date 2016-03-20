import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.name = "Stevan";
        this.state = {
            description: "Bogosavljević",
            title:"WlcStateTitle"
        }
    }

    render() {

        setTimeout(() => {
            this.setState({description: "Stevan Bogosavljević"})
        }, 2500);

        setTimeout(() => {
            this.setState({title: "setTimeoutStateTitle"})
        }, 4500);

        const title = "NewPropTitle";
        
        return (
            <div>
                <Header title={title}/>
                <Header title={this.state.title}/>
                <h1>It works!</h1>
                <h1>Hi {this.name}!</h1>
                <h3>description {this.state.description}</h3>
                <Footer/>
            </div>
        );
    }
}