import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/surfing.jpg";
import "../styles/Home.css";
import Form from "../components/Form";
import Content from "../components/Content";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> THE TRIP OF YOUR DREAM </h1>
        <p>We offer a variety of destinations to travel to, ranging from exotic to some extreme ones. They include very popular countries and cities like Paris, Rio de Janeiro, Cairo and a lot of others.</p>
        <Link to="/">
          <button> LEARN MORE </button>
        </Link>
      </div>
      <Form/>
    </div>
  );
}

export default Home;
