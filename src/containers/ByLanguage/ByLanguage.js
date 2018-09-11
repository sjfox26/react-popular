import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from "./ByLanguage.css";
import axios from 'axios';
import RepoGrid from '../../components/RepoGrid/RepoGrid';
import Loading from '../../components/Loading/Loading';

class ByLanguage extends Component {

    state = {
        loading: true,
        language: 'all',
        languages: ['all', 'javascript', 'ruby', 'python'],
        repos: []
    }

    componentDidMount () {
        const url = `https://api.github.com/search/repositories?q=stars:>1+language:${this.state.language}&sort=stars&order=desc&type=Repositories`;
        axios.get(url)
            .then(response => {
               console.log(response.data.items);
               this.setState({
                   repos: response.data.items,
                   loading: false
               })
            })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            const url = `https://api.github.com/search/repositories?q=stars:>1+language:${this.state.language}&sort=stars&order=desc&type=Repositories`;
            axios.get(url)
                .then(response => {
                    console.log(response.data.items);
                    this.setState({
                        repos: response.data.items,
                        loading: false
                    })
                })
        }
    }

    updateLanguage = (language) => {
        if (language !== this.state.language) {
            this.setState({
                loading: true,
                language: language
            });
        }
    }


    render () {


        return (
            <Aux>
                <div className={classes.ByLanguage}>
                    <ul className={classes.LanguageList}>
                        {this.state.languages.map((lang) => (
                            <li key={lang} onClick={() => this.updateLanguage(lang)} style= {(this.state.language === lang ? {fontWeight: 'bold', cursor: 'pointer'} : {fontWeight: 'normal', cursor: 'pointer'} )}>
                                {lang}
                            </li>
                        ))}
                    </ul>
                    {this.state.loading === true
                        ? <Loading />
                        : <div>
                            <h1 style={{textAlign: 'center'}}>
                                {this.state.activeLanguage}
                            </h1>
                            <RepoGrid repos={this.state.repos} />
                        </div>}
                </div>

            </Aux>

        );
    }
}

export default ByLanguage;