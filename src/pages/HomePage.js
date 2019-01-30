import React from "react";

import {
  withStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import theme from "mtc/theme";
import Image from "mtc/components/Image";

const cardImageSize = theme.images.genImageSizes({
  xs: () => `calc(100vw - 16px * 2)`,
  sm: w => w + "px",
  md: w => w + "px",
  lg: w => w + "px",
});

const styles = theme => ({
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
});

function HomePage({ classes }) {
  return (
    <Grid container spacing={32}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Qu’est-ce que la Médecine Traditionnelle Chinoise ?
        </Typography>
        <Typography paragraph>
          La Médecine Traditionnelle Chinoise est basée sur l’observation de
          l’homme et de la nature. Ainsi, après 5000 ans d’existence, elle
          permet efficacement de soulager une grandes quantités de maux et
          d’aider au bien être.
        </Typography>
        <Typography paragraph>
          De façon schématique, une douleur, une gêne physique ou moral est due
          à un blocage. Grâce aux différents outils de la Médecine Chinoise, je
          pourrai lever ces blocages et ainsi remettre en circulation vos
          énergies et faciliter l’autoguérison du corps.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2">Les outils</Typography>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card} component={Grid} container spacing={0}>
          <Grid item xs={12} md={4} className={classes.cardMedia}>
            <div className={classes.cardImageContainer}>
              <Image
                lazy
                lazyHeight={200}
                srcSet={[require("./images/acupuncture.jpg") + " 320w"]}
                sizes={cardImageSize}
                src={require("./images/acupuncture.jpg")}
                alt=""
                className={classes.cardImage}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={8} className={classes.cardMedia}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h2" component="h3" gutterBottom>
                L’acupuncture
              </Typography>
              <Typography>
                L’acupuncture est un outil pour travailler en toute minutie
                grace à des aiguilles très fines à usage unique. Elle permet
                d’agir en profondeur et de donner au soin une plus grande
                intensité. L’acupuncture permet de re-équilibrer et harmoniser
                les énergies et de relancer leur circulation.
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
              <Image
                lazy
                lazyHeight={200}
                srcSet={[require("./images/tuina.jpg") + " 320w"]}
                sizes={cardImageSize}
                src={require("./images/tuina.jpg")}
                alt=""
                className={classes.cardImage}
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
                modelage dynamique. Comme l’acupuncture, il permet d’harmoniser
                les énergies et permet une bonne circulation du sang et de la
                lymphe. Son action est moins profonde mais plus global.
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card} component={Grid} container spacing={0}>
          <Grid item xs={12} md={4} className={classes.cardMedia}>
            <div className={classes.cardImageContainer}>
              <Image
                lazy
                lazyHeight={200}
                srcSet={[require("./images/ventouses.jpg") + " 320w"]}
                sizes={cardImageSize}
                src={require("./images/ventouses.jpg")}
                alt=""
                className={classes.cardImage}
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
              <Image
                lazy
                lazyHeight={200}
                srcSet={[require("./images/acupuncture.jpg") + " 320w"]}
                sizes={cardImageSize}
                src={require("./images/acupuncture.jpg")}
                alt=""
                className={classes.cardImage}
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

export default withStyles(styles)(HomePage);
