import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FrontPage from '../pages/FrontPage';
import ArduinoPage from '../pages/Arduino/ArduinoPage';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/arduino" component={ArduinoPage} />
        </Switch>
    )
}