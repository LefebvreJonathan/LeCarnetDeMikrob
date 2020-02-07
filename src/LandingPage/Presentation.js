import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';



const textBold = (text) => {
    return <Box fontWeight="fontWeightBold">
        {text}
    </Box>
};

const DescriptionPresentation = () => {
    const title = "Quand être parent devient un jeu d'enfant";
    return <Grid item container xl={5} lg={5} md={5} direction="column" justify="center" alignItems="center" spacing={5} style={{margin: 5}}>
        <Grid item>
            <Typography color={"primary"} variant="h2">{textBold(title)}</Typography>
        </Grid>
        <Grid item>
            <Typography color={"primary"}>
                <b>Le carnet de Mikrob</b> est un carnet de santé connecté à la destination des parents qui
                souhaient le carnet de leur enfant dans leur poche.
            </Typography>
        </Grid>
        <Grid item><Typography color={"primary"}>{textBold("Prochainement disponible sur :")}</Typography></Grid>
        <Grid item container direction="row" justify="space-around" alignItems="flex-start">
            <Grid item><AndroidIcon style={{ fontSize: 100 }} color={"primary"}/></Grid>
            <Grid item><AppleIcon style={{ fontSize: 100 }} color={"primary"}/></Grid>
        </Grid>
    </Grid>;
};


const Presentation = () => {
    const debug = false ? "red" : ""

    return <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
        <Paper>
            <Grid container direction="row" justify={"space-around"} alignItems="center" style={{paddingTop: 30}}>
                <DescriptionPresentation/>
                <Grid item lg={3} xl={3} style={{backgroundColor: debug}}>
                    <img
                        height={"auto"}
                        width={"500"}
                        src={"https://static.boutique.orange.fr/media-cms/mediatheque/636x900-fairphone-3---vue-1-156109.png"}
                        alt={"phone-app"}/>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;
};

export default Presentation;