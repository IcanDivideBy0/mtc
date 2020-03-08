import React from "react";
import { withRouter, Switch, Route } from "react-router";
import loadable from "@loadable/component";

import { Grid, CircularProgress } from "@material-ui/core";

import NotFoundPage from "mtc/pages/NotFound";
import ContentContainer from "mtc/components/ContentContainer";
import mdxComponents from "mtc/mdx";

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

const HomePage = loadable(() => import("../pages/Home"), opts);
const ContactPage = loadable(() => import("../pages/Contact"), opts);

function mdxPage({ default: Mdx }) {
  return {
    default: props => <Mdx components={mdxComponents} {...props} />,
  };
}

// prettier-ignore
const SoinsPage      = loadable(() => import("../pages/Soins.mdx").then(mdxPage), opts);
// prettier-ignore
const MaPratiquePage = loadable(() => import("../pages/MaPratique.mdx").then(mdxPage), opts);
// prettier-ignore
const PreparatifsPage = loadable(() => import("../pages/Preparatifs.mdx").then(mdxPage), opts);
// prettier-ignore
const TarifsPage     = loadable(() => import("../pages/Tarifs.mdx").then(mdxPage), opts);
// prettier-ignore
const FaqPage     = loadable(() => import("../pages/Faq.mdx").then(mdxPage), opts);

function Router({ match }) {
  const getPath = path => match.url + path;

  return (
    <Switch>
      <Route exact path={getPath("(index|index.html)?")} component={HomePage} />
      <Route exact path={getPath("soins")} component={SoinsPage} />
      <Route exact path={getPath("ma-pratique")} component={MaPratiquePage} />
      <Route exact path={getPath("préparatifs")} component={PreparatifsPage} />
      <Route exact path={getPath("faq")} component={FaqPage} />
      <Route exact path={getPath("tarifs")} component={TarifsPage} />
      <Route exact path={getPath("contact")} component={ContactPage} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(Router);
