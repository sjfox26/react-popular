import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from "./ByLanguage.css";
import axios from 'axios';


class ByLanguage extends Component {

    state = {
        test: 'HI',
        language: 'all',
        languages: ['all', 'javascript', 'ruby', 'python']
    }

    componentDidMount () {
        const url = `https://api.github.com/search/repositories?q=stars:>1+language:${this.state.language}&sort=stars&order=desc&type=Repositories`;
        axios.get(url)
            .then(response => {
               console.log(response);
            })
    }

    updateLanguage = (language) => {
        this.setState({
            language: language
        });
    }


    render () {


        return (
            <Aux>
                <div className={classes.ByLanguage}>
                    <div>
                        Data for {this.state.language}
                    </div>
                    <ul>
                        {this.state.languages.map((lang) => (
                            <li key={lang} onClick={() => this.updateLanguage(lang)}>
                                {lang}
                            </li>
                        ))}
                    </ul>
                </div>
            </Aux>

        );
    }
}

export default ByLanguage;