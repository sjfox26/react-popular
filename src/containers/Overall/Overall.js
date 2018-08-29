import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Overall.css';



class Overall extends Component {

    state = {
        test: ''
    }

    render () {

        return (
            <Aux>
                <div className={classes.Overall}>
                    <div>
                        Most Popular Overall
                    </div>
                    <div>
                        Data
                    </div>
                </div>

            </Aux>

        );
    }
}

export default Overall;