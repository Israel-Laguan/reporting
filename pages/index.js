import React from "react";
import Home from "./home"
import withAuth from "../utils/withAuth";

class App extends React.Component {
    render() {
        return (
            <Home/>
        )
    }
};

export default withAuth(App)
