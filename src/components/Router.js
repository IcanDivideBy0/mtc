import React from "react";
import { withRouter, Switch, Route } from "react-router";
import loadable from "@loadable/component";

import { Grid, CircularProgress } from "@material-ui/core";

import NotFoundPage from "mtc/pages/NotFoundPage";
import ContentContainer from "mtc/components/ContentContainer";

const opts = {
  fallback: (
    <ContentContainer padded>
      <Grid container justify="center">
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    </ContentContainer>
  ),
};

const HomePage = loadable(() => import("mtc/pages/HomePage"), opts);
const TreatmentsPage = loadable(() => import("mtc/pages/TreatmentsPage"), opts);
const PricingPage = loadable(() => import("mtc/pages/PricingPage"), opts);
const ContactPage = loadable(() => import("mtc/pages/ContactPage"), opts);

function Router({ match }) {
  const getPath = path => match.url + path;

  return (
    <Switch>
      <Route exact path={getPath("(index|index.html)?")} component={HomePage} />
      <Route exact path={getPath("soins")} component={TreatmentsPage} />
      <Route exact path={getPath("tarifs")} component={PricingPage} />
      <Route exact path={getPath("contact")} component={ContactPage} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(Router);
