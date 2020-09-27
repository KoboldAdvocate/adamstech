import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./hoc/Layout";
import FrontPage from "./pages/FrontPage";

function App() {
  return (
    <div>
      <Layout>
        <FrontPage />
      </Layout>
    </div>
  );
}

export default App;
