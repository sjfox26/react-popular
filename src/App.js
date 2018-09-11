import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import ByName from "./containers/ByName/ByName";
import ByLanguage from "./containers/ByLanguage/ByLanguage";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/by_name" component={ByName} />
                        <Route path="/" component={ByLanguage} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
