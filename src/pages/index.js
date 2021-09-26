import React from "react";
import Image from "next/image";
import { Alert, Box, Grid, Card, CardContent, Typography } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   alertMessage: {
//     flexGrow: 1,
//     position: "relative",
//   },
//   alertImage: {
//   },
//   card: {
//
//   },
//   cardMedia: {
//
//   },
//   cardImageContainer: {
//   },
//   cardContent: {
//     ,
//   },
// }));

export default function HomePage() {
  const classes = {};

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Alert
          severity="info"
          sx={{ marginBottom: 2 }}
          classes={{
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

          <Box
            sx={{
              display: "block",
              maxWidth: 200,
              margin: (t) => t.spacing(1, "auto"),

              position: { lg: "absolute" },
              right: { lg: 0 },
              top: { lg: "50%" },
              transform: { lg: "translateY(-50%)" },
            }}
          >
            <Image src={require("./_images/home/klyona.png")} alt="" />
          </Box>
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
        <Card sx={{ display: "flex" }} component={Grid} container spacing={0}>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              position: "relative",
              paddingBottom: { xs: "33.333%", lg: "16.666%" },
            }}
          >
            <Image
              src={require("./_images/home/acupuncture.jpg")}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <CardContent>
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
