import React from "react";
import "./HomeElements.css";

const Home = () => {
    return (
        <div id="home" class="divHome">
            <h2 class="Greeting">
                Howdy<span class="Wave">👋</span>! My name is
            </h2>
            <h1 id="HomeName">Jhun-Thomas Calahatian</h1>
            <h2 class="Greeting">I am also a...</h2>
            <div class="Scroller">
                <h3>
                    <span>
                        🧑‍💻 Software Engineer 🧑‍💻
                        <br />
                        🤤 Foodie 🍜
                        <br />
                        🎮 Gamer 🎮
                        <br />
                        🐕 Full-Time Dog Admirer 🐕
                    </span>
                </h3>
            </div>
        </div>
    );
};

export default Home;
