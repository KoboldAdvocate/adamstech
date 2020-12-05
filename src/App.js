import React from "react";
import { Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./hoc/Layout";
import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
