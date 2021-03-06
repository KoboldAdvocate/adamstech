import React from "react";

import { Image } from "react-bootstrap";

import styles from "./FrontPage.module.css";
import AboutPage from "./AboutPage";
import HomeCarousel from "../components/HomeCarousel";
import UnityPage from './UnityPage';
import ARPage from "./ARPage";
import ArduinoPage from './Arduino/ArduinoPage';
import ExternalPage from "./ExternalPage";

export default function FrontPage() {
  return (
    <div>
      <div className={styles.pagecontainer} id="home">
        <h1>Welcome to my website</h1>
        <p>Half portfolio, half for fun</p>
      </div>

      <hr />

      <div className={styles.pagecontainer} id="about">
        <AboutPage />
      </div>

      <hr />

      <div className={styles.pagecontainer} id="contact">
        <ExternalPage />
      </div>
      
      <div>
      <small>
        Built using ReactJS and AWS
      </small>
      </div>
      
    </div>
  );
}
