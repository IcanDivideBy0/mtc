import React from "react";
import { withRouter, Switch, Route } from "react-router";
import loadable from "@loadable/component";
import styled from "styled-components";

import PageContent from "./PageContent";
import Loader from "./Loader";

import NotFoundPage from "pages/NotFoundPage";

const LoaderPage = styled(PageContent)`
  display: flex;
  justify-content: center;
`;

const opts = {
  fallback: (
    <LoaderPage>
      <Loader />
    </LoaderPage>
  ),
};

/**
 * Route’s `component` prop type warning fixed in
 * https://github.com/ReactTraining/react-router/commit/8ecdbd9727cbffe34c41cfe595e67cae2b7ce62f
 * until then wrap the component in a function to avoid useless warning.
 */

const wrapFn = Component => props => <Component {...props} />;

const HomePage = loadable(() => import("pages/HomePage"), opts);
const TreatmentsPage = loadable(() => import("pages/TreatmentsPage"), opts);
const PricingPage = loadable(() => import("pages/PricingPage"), opts);
const ContactPage = loadable(() => import("pages/ContactPage"), opts);

function Router({ match }) {
  const getPath = path => match.url + path;

  return (
    <Switch>
      <Route
        exact
        path={getPath("(index|index.html)?")}
        component={wrapFn(HomePage)}
      />
      <Route exact path={getPath("soins")} component={wrapFn(TreatmentsPage)} />
      <Route exact path={getPath("tarifs")} component={wrapFn(PricingPage)} />
      <Route exact path={getPath("contact")} component={wrapFn(ContactPage)} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(Router);
