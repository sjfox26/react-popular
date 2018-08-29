import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import Overall from "./containers/Overall/Overall";
import ByLanguage from "./containers/ByLanguage/ByLanguage";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/overall" component={Overall} />
                        <Route path="/" component={ByLanguage} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
