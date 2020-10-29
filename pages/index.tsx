import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import ButtonLink from "../src/Link";
import Link from 'next/link'
import AcUnit from "@material-ui/icons/AcUnit";




const useStyles = makeStyles({
  root: {
    width: 517,
  },
  media: {
    height: 210,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid item xs={12}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Instituto Superior de Formación Técnica 118
        </h1>


        </main>
      </Grid>
      <Grid item container justify="center" sm={12}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image="https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/17796654_1794436640883427_3827394695847069712_n.jpg?_nc_cat=109&ccb=2&_nc_sid=9267fe&_nc_ohc=kJ0CYDS8sWoAX_0wIHT&_nc_ht=scontent.faep9-1.fna&oh=39b4641a300d1d74061eddb7a7998cb3\&oe=5FBD7393" title="edificio" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Conoce nuestras carreras o contactanos
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link href="/contacto">
              <Button variant="contained" size="small" color="primary">
                Contacto
              </Button>
            </Link>
            <Link href="/carreras">
              <Button variant="outlined" size="small" color="primary">
                Carreras
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>

      <footer className={styles.footer}>
        Desarrollado por Fabrizio Muraca
      </footer>
    </Grid>
  )
}
