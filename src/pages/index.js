import React from "react";
import Image from "next/image";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  alert: {
    marginBottom: theme.spacing(2),
  },
  alertMessage: {
    flexGrow: 1,
    position: "relative",
  },
  alertImage: {
    display: "block",
    maxWidth: 200,
    margin: theme.spacing(1, "auto"),

    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  card: {
    display: "flex",
  },
  cardMedia: {
    display: "flex",
  },
  cardImageContainer: {
    flexGrow: 1,
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
      maxHeight: 0,
      paddingBottom: "calc(2 / 6 * 100%)",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "calc(2 / 4 * 100%)",
    },
  },
  cardContent: {
    flexGrow: 2,
  },
}));

export default function HomePage(props) {
  const classes = useStyles(props);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Alert
          severity="info"
          classes={{
            root: classes.alert,
            message: classes.alertMessage,
          }}
        >
          <Typography>
            Retrouvez moi tous les lundis au centre de bien être Kloyna&nbsp;:
            <br />
            <br />
            88 rue de la bourgeonnière 44300 Nantes <br />
            Tram 2 Bourgeonnière <br />
            Bus 26/86/116 Fresche Blanc <br />
            Stationnement gratuit
          </Typography>

          <div className={classes.alertImage}>
            <Image src={require("./_images/home/klyona.png")} alt="" />
          </div>
        </Alert>

        <Typography variant="h1" gutterBottom>
          Qu’est-ce que la Médecine Énergétique Chinoise&nbsp;?
        </Typography>
        <Typography paragraph>
          La médecine énergétique chinoise est basée sur l’observation de
          l’homme et de la nature. Après plus de 3000 ans d’existence, elle
          permet efficacement de soulager une grandes quantités de maux et
          d’aider au bien être.
        </Typography>
        <Typography paragraph>
          De façon schématique, une douleur, une gêne physique ou moral est due
          à un blocage. Grâce à l’acupuncture, je pourrai lever ces blocages et
          ainsi remettre en circulation vos énergies et faciliter l’autoguérison
          du corps.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card} component={Grid} container spacing={0}>
          <Grid item xs={12} md={4} className={classes.cardMedia}>
            <div className={classes.cardImageContainer}>
              <Image
                src={require("./_images/home/acupuncture.jpg")}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Grid>

          <Grid item xs={12} md={8} className={classes.cardMedia}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h2" component="h3" gutterBottom>
                L’acupuncture
              </Typography>
              <Typography>
                L’acupuncture est un outil pour travailler en toute minutie et
                précision grâce à des aiguilles stériles très fines à usage
                unique. Elle permet d’agir efficacement pour obtenir un
                soulagement rapide. L’acupuncture permet de re-équilibrer et
                harmoniser les énergies et de relancer leur circulation.
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
