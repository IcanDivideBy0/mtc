import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  cardImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
        <Typography variant="h1" gutterBottom>
          Qu’est-ce que la Médecine Énergétique Chinoise ?
        </Typography>
        <Typography paragraph>
          La médecine énergétique chinoise est basée sur l’observation de
          l’homme et de la nature. Après plus de 3000 ans d’existence, elle
          permet efficacement de soulager une grandes quantités de maux et
          d’aider au bien être.
        </Typography>
        <Typography paragraph>
          De façon schématique, une douleur, une gêne physique ou moral est due
          à un blocage. Grâce aux différents outils de la médecine énergétique
          chinoise, je pourrai lever ces blocages et ainsi remettre en
          circulation vos énergies et faciliter l’autoguérison du corps.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2">Les outils</Typography>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card} component={Grid} container spacing={0}>
          <Grid item xs={12} md={4} className={classes.cardMedia}>
            <div className={classes.cardImageContainer}>
              <img
                src="/images/home/acupuncture.jpg"
                className={classes.cardImage}
                alt=""
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
                unique. Elle permet d’agir en profondeur et de donner au soin
                une plus grande intensité et rapidité au soulagement.
                L’acupuncture permet de re-équilibrer et harmoniser les énergies
                et de relancer leur circulation.
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card
          className={classes.card}
          component={Grid}
          container
          spacing={0}
          direction="row-reverse"
        >
          <Grid item xs={12} md={4} className={classes.cardMedia}>
            <div className={classes.cardImageContainer}>
              <img
                src="/images/home/tuina.jpg"
                className={classes.cardImage}
                alt=""
              />
            </div>
          </Grid>

          <Grid item xs={12} md={8} className={classes.cardMedia}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h2" component="h3" gutterBottom>
                Le massage Tui Na
              </Typography>
              <Typography>
                Le massage Tui Na est une mobilisation manuel semblable à un
                modelage dynamique. Adapter pour la détente, ce soin est plus
                global et permet un récupération plus progressive.
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card} component={Grid} container spacing={0}>
          <Grid item xs={12} md={4} className={classes.cardMedia}>
            <div className={classes.cardImageContainer}>
              <img
                src="/images/home/ventouses.jpg"
                className={classes.cardImage}
                alt=""
              />
            </div>
          </Grid>

          <Grid item xs={12} md={8} className={classes.cardMedia}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h2" component="h3" gutterBottom>
                Les Ventouses
              </Typography>
              <Typography>
                Les Ventouses permettent de créer une succion sur les couches
                les plus externe du corps (peau, système lymphatique, cellules
                adipeuses et premières couches des muscles). Elles sont idéales
                pour lever certaines stagnations, et donc aider à une bonne
                circulation.
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card
          className={classes.card}
          component={Grid}
          container
          spacing={0}
          direction="row-reverse"
        >
          <Grid item xs={12} md={4} className={classes.cardMedia}>
            <div className={classes.cardImageContainer}>
              <img
                src="/images/home/moxas.jpg"
                className={classes.cardImage}
                alt=""
              />
            </div>
          </Grid>

          <Grid item xs={12} md={8} className={classes.cardMedia}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h2" component="h3" gutterBottom>
                Les Moxas
              </Typography>
              <Typography>
                Les Moxas sont des batons d’armoise ressemblant à des cigare. On
                s’en sert essentiellement chauffer les points d’acupuncture et
                ainsi re-énergiser la personne, chasser le froid du corps et
                apaiser certaines douleurs physique ou psychique.
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
