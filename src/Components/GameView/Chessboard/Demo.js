import React, { Component } from "react";

import WithMoveValidation from "../Chessboard/WithMoveValidation";

class Demo extends Component { 
    render() {
        return (
        <div>
            <div style={boardsContainer}>
            <WithMoveValidation />
            </div>
        </div>
        );
    }
    }

    export default Demo;

    const boardsContainer = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "40vw",
    marginTop: 40,
    marginRight: 10,
    marginBottom: 50
    };
