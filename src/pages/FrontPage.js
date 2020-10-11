import React from "react";

import { Image } from "react-bootstrap";

import styles from "./FrontPage.module.css";
import AboutPage from "./AboutPage";
import HomeCarousel from "../components/HomeCarousel";
import UnityPage from './UnityPage';
import ARPage from "./ARPage";
import ExternalPage from "./ExternalPage";

export default function FrontPage() {
  return (
    <div>
      <div className={styles.pagecontainer} id="home">
        <h1>Welcome to my website</h1>
        <p>Half portfolio, half for fun</p>
        <p>Currently under heavy construction</p>
        <Image
          src={require("../assets/catstruction.gif")}
          roundedCircle
          fluid
        />
      </div>

      <HomeCarousel />

      <hr />

      <div className={styles.pagecontainer} id="unity">
        <UnityPage />
      </div>

      <hr />

      <div className={styles.pagecontainer} id="augmentedreality">
        <ARPage />
      </div>

      <hr />

      <div className={styles.pagecontainer} id="about">
        <AboutPage />
      </div>

      <hr />

      <div className={styles.pagecontainer} id="contact">
        <ExternalPage />
      </div>
    </div>
  );
}
