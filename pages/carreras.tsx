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
                        <Typography ><h3>Tecnicatura Superior en Análisis de Sistemas</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Prepara a los alumnos para desempeñarse en equipos interdisciplinarios el ámbito empresarial, para resolver
                            problemas informáticos y destacarse en el manejo de herramientas tecnológicas.
                            <h5>Primer año</h5>
                            <ul>
                                <li>Algebra</li>
                                <li>Analisis matematico</li>
                                <li>Ingles tecnico I</li>
                                <li>Administracion de las organizaciones</li>
                                <li>Metodologia de  la investigacion</li>
                                <li>Programacion I</li>
                                <li>Introduccion a los sistemas de la informacion</li>
                            </ul>
                            <h5>Segundo año</h5>
                            <ul>
                                <li>Probabilidad y estadistica</li>
                                <li>Analisis matematico II</li>
                                <li>Ingles tecnico II</li>
                                <li>Sistemas de informacion I</li>
                                <li>Programacion II</li>
                                <li>Sistemas operativos</li>
                                <li>Bases de datos</li>
                                <li>EDI II</li>
                            </ul>
                            <h5>Tercer año</h5>
                            <ul>
                                <li>Investigacion operativa</li>
                                <li>Economia empresarial</li>
                                <li>Teleinformatica</li>
                                <li>Sistemas de informacion II</li>
                                <li>Practica profesional</li>
                                <li>EDI III</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography ><h3>Tecnicatura Superior en Administración Pública Municipal</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Con egresados capacitados para elaborar, controlar y registrar el flujo de información, organizar
                            y planificar los recursos referidos para desarrollar sus actividades interactuando con el entorno, y
                            coordinar equipos de trabajo relacionado con su especialidad.
                        <h5>Primer año</h5>
                            <ul>
                                <li>Estado y sociedad</li>
                                <li>Matematica financiera</li>
                                <li>Economia</li>
                                <li>Produccion oral y escrita</li>
                                <li>Informatica</li>
                                <li>Metodologia de la investigacion</li>
                                <li>Derecho y derecho constitucional</li>
                                <li>Contabilidad publica</li>
                                <li>Principios de la administracion</li>
                                <li>EDI</li>
                            </ul>
                            <h5>Segundo año</h5>
                            <ul>
                                <li>Estadistica</li>
                                <li>TICs en gestion publica</li>
                                <li>Ingles</li>
                                <li>Comunicacion</li>
                                <li>Procesos politicos economicos</li>
                                <li>Derecho laboral y relaciones laborales</li>
                                <li>Derecho publico</li>
                                <li>Politicas publicas y desarrollo social</li>
                                <li>EDI</li>
                            </ul>
                            <h5>Tercer año</h5>
                            <ul>
                                <li>Finanzas publicas</li>
                                <li>Derecho administrativo</li>
                                <li>Desarrollo local y planificacion estrategica</li>
                                <li>Evaluacion de proyecto de inversion</li>
                                <li>Administracion economica financiera</li>
                                <li>Recursos humanos</li>
                                <li>Practica profecional</li>
                                <li>EDI</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography ><h3>Tecnicatura Superior en Administración Contable</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Para trabajar a futuro como colaborador capacitado de contadores públicos, participar en el
                            diseño y la organización de sistemas administrativos-contables y conocer herramientas de
                            gestión de pequeñas y medianas empresas.
                        <h5>Primer año</h5>
                            <ul>
                                <li>Matematica I</li>
                                <li>Computacion I</li>
                                <li>Derecho</li>
                                <li>Economia</li>
                                <li>Contabilidad</li>
                                <li>Sociologia de la organizacion</li>
                                <li>Principios de la organizacion</li>
                                <li>Metodologia de la investigacion</li>
                                <li>Gestion administrativo contable</li>
                                <li>EDI</li>
                            </ul>
                            <h5>Segundo año</h5>
                            <ul>
                                <li>Matematica II</li>
                                <li>Estadistica</li>
                                <li>Ingles I</li>
                                <li>Computacion II</li>
                                <li>Contabilidad II</li>
                                <li>Matematica financiera</li>
                                <li>Derecho laboral</li>
                                <li>Practica profecional</li>
                                <li>Derecho comercial</li>
                                <li>EDI</li>
                            </ul>
                            <h5>Tercer año</h5>
                            <ul>
                                <li>Ingles II</li>
                                <li>Tecnica impositiva laboral</li>
                                <li>Regimen tributario</li>
                                <li>Contabilidad III</li>
                                <li>Costos y presupuestos</li>
                                <li>Administracion financiera</li>
                                <li>Administracion estrategica</li>
                                <li>EDI</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography ><h3>Tecnicatura Superior en Producción de Alimentos</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Destinada a formar profesionales capaces de controlar y evaluar correctamente la situación de los alimentos a lo
                            largo de todo el proceso productivo.
                        <h5>Primer año</h5>
                            <ul>
                                <li>Matematica</li>
                                <li>Fisica</li>
                                <li>Ingles</li>
                                <li>Quimica inorganica</li>
                                <li>Quimica organica</li>
                                <li>Biologia aplicada y botanica general</li>
                                <li>Metodologia de la investigacion</li>
                                <li>Practica profecional I</li>
                            </ul>
                            <h5>Segundo año</h5>
                            <ul>
                                <li>Fisico quimica</li>
                                <li>Estadistica</li>
                                <li>Quimica analitica</li>
                                <li>Ecologia y quimica industrial</li>
                                <li>Practica profesional II</li>
                                <li>Microbiologia</li>
                                <li>Bromatologia</li>
                            </ul>
                            <h5>Tercer año</h5>
                            <ul>
                                <li>Tecnologia de frutas y hortalizas</li>
                                <li>Organizacion y administracion de la empresa agraria</li>
                                <li>Control de calidad</li>
                                <li>Sanidad vegetal</li>
                                <li>Ingles</li>
                                <li>Practica profesional III</li>
                                <li>Filosofia</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography ><h3>Tecnicatura Superior en Servicios Gastronómicos</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            El técnico superior en gestión de servicios gastronómicos es un profesional competente para
                            la organización, administración, planificación, control y asesoramiento en los servicios
                            de gastronomía de todo tipo y tamaño así como los de provisión de alimentos elaborados.
                        <h5>Primer año</h5>
                            <ul>
                                <li>Instalaciones y equipamientos</li>
                                <li>Gastronomicos: Uso y mantenimientos</li>
                                <li>Informatica</li>
                                <li>Planificaion y organizacion del servicio</li>
                                <li>Buenas practicas para la elaboracion de alimentos</li>
                                <li>Materias primas y nutricion</li>
                                <li>Cocina basica y servicio</li>
                                <li>Panaderia y pasteleria</li>
                                <li>Practica profesionalizante I</li>
                            </ul>
                            <h5>Segundo año</h5>
                            <ul>
                                <li>Organizacion de eventos</li>
                                <li>Menu diseño y ambientacion de restaurantes</li>
                                <li>Costos y compras</li>
                                <li>Cocina Argentina y Latinoamericana</li>
                                <li>Cocina internacional</li>
                                <li>Enologia y barman</li>
                                <li>Reposteria</li>
                                <li>Practica profesionalizante II</li>
                                <li>EDI</li>
                            </ul>
                            <h5>Tercer año</h5>
                            <ul>
                                <li>Legislacion y administracion personal</li>
                                <li>Comercializacion</li>
                                <li>Relacion publicas y congresos</li>
                                <li>Contabilidad y administracion de empresas economicas</li>
                                <li>Arte culinario</li>
                                <li>Gestion de la calidad gastrinomica</li>
                                <li>Gestion de alimentos y bebidas</li>
                                <li>Practica profesionalizante</li>
                                <li>EDI</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}