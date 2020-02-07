import {AppBar, Grid} from "@material-ui/core";
import React from "react";
import Presentation from "./Presentation";

const Appbar = () => {
    return <AppBar position="static"
                   style={{background: 'transparent', boxShadow: 'none', marginBottom: 30, marginTop: 20,}}>
        <Grid container>
            <Grid item container justify="center">
                <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                    <Grid container item>
                        <img src={"Microb.png"} alt="logo" width={"auto"} height={"100"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </AppBar>;
};

const LandingPage = () => {
    return (
        <Grid container>
            <Appbar/>
            <Grid item container justify="center">
                <Presentation/>
            </Grid>
        </Grid>
    );
};

export default LandingPage;
