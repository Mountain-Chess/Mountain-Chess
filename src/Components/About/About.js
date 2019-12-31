import React, { Component } from "react";
import "./About.css";



export default class About extends Component {
    

    render() {
        return (
        <div className="about-page">
            <h1>About Mountain Chess</h1>
            
            <h3> Mountain Chess is a full stack web application built by a small team of developers using React, Node.js, PostgreSQL, Javascript, Socket.IO and other technologies.  Mountain Chess features its own game engine constructed from scratch, as well as many different features that are all integrated into a fully-functional user interface.  Players can add friends, see when those friends are online, chat with other users and view a leaderboard that displays the top-performing users on the website. If you would like to learn more about the project, you can contact any of us by using the links below.</h3>            
            <></>
            <div className="names-cont">
                <div className="name">
                    <h2>Stephen Hubbard:</h2>
                    <a href="https://www.linkedin.com/in/stephenhubbard88/">
                        <img className="linkedin-logo" src="https://icons-for-free.com/iconfiles/png/512/linkedin+linkedin+logo+networking+social+media+icon-1320196081476022403.png" alt=""/>
                    </a>
                    <a href="https://github.com/StephenHubbard">
                        <img className="github-logo" src="http://pngimg.com/uploads/github/github_PNG83.png" alt=""/>
                    </a>
                    <a href="https://www.stephen-hubbard.com">
                        <h2>stephen-hubbard.com</h2>
                    </a>
                </div>
                <div className="name">
                    <h2>Rob Reiss:</h2>
                    <a href="https://www.linkedin.com/in/robertcreiss/">
                    <img className="linkedin-logo" src="https://icons-for-free.com/iconfiles/png/512/linkedin+linkedin+logo+networking+social+media+icon-1320196081476022403.png" alt=""/>
                    </a>
                    <a href="https://github.com/RobertReiss">
                    <img className="github-logo" src="http://pngimg.com/uploads/github/github_PNG83.png" alt=""/>
                    </a>
                </div>
                <div className="name">
                    <h2>Lance Jenkins:</h2>
                    <a href="https://www.linkedin.com/in/lance-jenkins/">
                    <img className="linkedin-logo" src="https://icons-for-free.com/iconfiles/png/512/linkedin+linkedin+logo+networking+social+media+icon-1320196081476022403.png" alt=""/>
                    </a>
                    <a href="https://github.com/laprje">
                    <img className="github-logo" src="http://pngimg.com/uploads/github/github_PNG83.png" alt=""/>
                    </a>
                </div>
                <div className="name">
                    <h2>Carter Endsley:</h2>
                    <a href="https://www.linkedin.com/in/carterendsley/">
                    <img className="linkedin-logo" src="https://icons-for-free.com/iconfiles/png/512/linkedin+linkedin+logo+networking+social+media+icon-1320196081476022403.png" alt=""/>
                    </a>
                    <a href="https://github.com/carterqe">
                    <img className="github-logo" src="http://pngimg.com/uploads/github/github_PNG83.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
        );
    }
    }


