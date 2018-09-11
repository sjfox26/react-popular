import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from "./ByName.css";
import axios from 'axios';
import UserGrid from '../../components/UserGrid/UserGrid';
import Loading from '../../components/Loading/Loading';

class ByName extends Component {

    state = {
        loading: true,
        name: 'scott',
        repos: []
    }

    componentDidMount () {
        const url = `https://api.github.com/search/users?q=${this.state.name}+repos:%3E42+followers:%3E1000`;
        axios.get(url)
            .then(response => {
                console.log(response.data.items);
                this.setState({
                    repos: response.data.items,
                    loading: false
                })
            })
    }

    typingInputHandler = ( event ) => {
        this.setState( {
            //...this.state,
            name: event.target.value
        })
    }


    updateSearch = () => {
        this.search(this.state.name);
    }

    search = (name) => {
        let url = 'https://api.github.com/search/users?q=' + name + '+repos:%3E42+followers:%3E1000';
        axios.get(url)
            .then(response => {
                console.log(response.data.items);
                this.setState({
                    repos: response.data.items,
                    loading: false
                })
            })

    }


    render () {


        return (
            <Aux>
                <div className={classes.ByName}>

                    {this.state.loading === true
                        ? <Loading />
                        : <div>
                            <p style={{textAlign: 'center'}}>
                                The most popular users with the first name: {this.state.name}
                            </p>
                            <UserGrid repos={this.state.repos} />
                            <br/>
                            <input className={classes.Input} type="text" placeholder="Try another first name..." onChange={this.typingInputHandler}></input>
                            <button className={classes.Button} onClick={this.updateSearch}>Search</button>
                        </div>}
                </div>

            </Aux>

        );
    }
}

export default ByName;