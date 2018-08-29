import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            Most Popular By Language
            Most Popular Overall
        </Layout>
      </div>
    );
  }
}

export default App;
