import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from "./ByLanguage.css";



class ByLanguage extends Component {

    state = {
        test: 'HI'
    }

    render () {


        return (
            <Aux>
                <div className={classes.ByLanguage}>
                    <div>
                        Languages
                        {this.state.test}
                    </div>
                    <div>
                        Data
                    </div>
                </div>
            </Aux>

        );
    }
}

export default ByLanguage;