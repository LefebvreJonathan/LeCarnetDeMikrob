import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Deployement from "./Deployement";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import LandingPage from "./LandingPage/LandingPage";

const deployement = false;
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5271ff'
        },
        secondary: {
            main: "#e5f3ff"
        }
    }
});

const app = <MuiThemeProvider theme={theme}>
    {deployement ? <Deployement/> : <LandingPage/>}
</MuiThemeProvider>;

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
