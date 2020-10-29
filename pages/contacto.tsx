import Grid from "@material-ui/core/Grid";
import Head from 'next/head'
import Box from "@material-ui/core/Box";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Call from "@material-ui/icons/Call";

export default function Contacto() {
    return (
        <Grid container justify="center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid item container sm={12} justify="center">
                <h1>Contacto</h1>
            </Grid>
            <Grid item container sm={8} justify="center">
                <Call />03329 42-8950
            </Grid>
        </Grid>
    )
}