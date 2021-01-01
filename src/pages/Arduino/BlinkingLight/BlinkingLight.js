import React from 'react';
import { Image } from 'react-bootstrap';

import styles from '../ArduinoPage.module.css';

function BlinkingLight() {
    return (
        <div>
            <div class={styles.header}>
                <h1>Blinking Light</h1>
            </div>

            <div class="container">
                
                <div class="row">
                    <div class="col">
                        <p>You could consider blinking an LED to be the 'Hello World'       of the Arduino world.</p>
                        <p>For this you will need:</p>
                        <div>
                            <div className={styles.partsList}>
                                <ul>
                                    <li>One Arduino board</li>
                                    <li>One Breadboard</li>
                                    <li>One LED</li>
                                    <li>Two (2) jumper wires</li>
                                    <li>One 220 ohm resistor (not necessary,but will reduce the brightness and preserve your LEDs lifespan)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md">
                        <Image src={require("./blinkinglight.png")} fluid />
                    </div>
                </div>
                <h3>The Code</h3>
                <blockquote>
                <code>
                    <p>#define led_pin 7</p>
                <p>void setup()\{}</p>
                </code>
                </blockquote>
                
            </div>

        </div>
    )
}

export default BlinkingLight;