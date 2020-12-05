import React, { useState } from 'react';
import { Dropdown, DropdownButton, Image } from "react-bootstrap";

import styles from './ArduinoPage.module.css'
import ArduinoSidebar from './ArduinoSidebar';
import BlinkingLight from './BlinkingLight/BlinkingLight';
import WeatherStation from './WeatherStation';

function ArduinoPage() {
    const [project, setProject] = useState(<BlinkingLight />);
    return (
        <div className={styles.arduinoPage}>
            <Image
                src={require("../../assets/arduino_logo.png")}
                height="100px"
        />
        
        <div className={styles.sidebar}>
            <DropdownButton title="Projects">
                <Dropdown.Item onClick={() => setProject(<BlinkingLight />)}>Blinking Light</Dropdown.Item>
                <Dropdown.Item onClick={() => setProject(<WeatherStation />)}>Weather Station</Dropdown.Item>
            </DropdownButton>
        </div>

        <hr />

        <div>
            {project}
        </div>

        </div>
    );
}

export default ArduinoPage;