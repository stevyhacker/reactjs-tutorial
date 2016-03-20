import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.name = "Stevan";
        this.state = {
            description: "Bogosavljević"
        }
    }

    render() {

        setTimeout(() => {
            this.setState({description: "Stevan Bogosavljević Sr. Jr."})
        }, 2500);
        
        return (
            <div>
                <Header/>
                <h1>It works!</h1>
                <h1>Hi {this.name}!</h1>
                <h3>description {this.state.description}</h3>
                <Footer/>
            </div>
        );
    }
}