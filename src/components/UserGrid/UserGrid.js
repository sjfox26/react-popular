import React from 'react';
import classes from './UserGrid.css';

const UserGrid = (props) => (
    <ul className={classes.UserGrid}>
        {props.repos.map(({ html_url, login, score }) => (
            <li key={login} className={classes.User}>
                <ul>
                    <li><a href={html_url}>@{login}</a></li>
                    <li>score: {score}</li>
                </ul>
            </li>
        ))}
    </ul>
);


export default UserGrid;