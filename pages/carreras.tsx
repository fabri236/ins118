import Grid from "@material-ui/core/Grid";
import Head from 'next/head'
import Box from "@material-ui/core/Box";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Contacto() {
    return (
        <Grid container justify="center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid item container sm={12} justify="center">
                <h1> Carreras</h1>
            </Grid>
            <Grid item sm={8}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography >Tecnicatura Superior en Producción de Alimentos</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Destinada a formar profesionales capaces de controlar y evaluar correctamente la situación de los alimentos a lo
                            largo de todo el proceso productivo.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography >Tecnicatura Superior en Análisis de Sistemas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Prepara a los alumnos para desempeñarse en equipos interdisciplinarios el ámbito empresarial, para resolver
                            problemas informáticos y destacarse en el manejo de herramientas tecnológicas.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography >Tecnicatura Superior en Servicios Gastronómicos</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            El técnico superior en gestión de servicios gastronómicos es un profesional competente para
                            la organización, administración, planificación, control y asesoramiento en los servicios
                            de gastronomía de todo tipo y tamaño así como los de provisión de alimentos elaborados.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography >Tecnicatura Superior en Administración Contable</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Para trabajar a futuro como colaborador capacitado de contadores públicos, participar en el
                            diseño y la organización de sistemas administrativos-contables y conocer herramientas de
                            gestión de pequeñas y medianas empresas.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography >Tecnicatura Superior en Administración Pública Municipal</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Con egresados capacitados para elaborar, controlar y registrar el flujo de información, organizar
                            y planificar los recursos referidos para desarrollar sus actividades interactuando con el entorno, y
                            coordinar equipos de trabajo relacionado con su especialidad.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}