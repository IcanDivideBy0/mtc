import React from "react";
import { withRouter, Switch, Route } from "react-router";
import loadable from "@loadable/component";
import styled from "styled-components";

import { Layout, Loader } from "modules/common";

import NotFoundPage from "./NotFoundPage";

const LoaderPage = styled(Layout)`
  display: flex;
  justify-content: center;
`;

const loadableOpts = {
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

const HomePage = wrapFn(
  loadable(() => import("modules/home/components/HomePage"), loadableOpts)
);

const ContactPage = wrapFn(
  loadable(() => import("modules/contact/components/ContactPage"), loadableOpts)
);

function Router({ match }) {
  return (
    <Switch>
      <Route
        exact
        path={match.url + "(index|index.html)?"}
        component={HomePage}
      />
      <Route exact path={match.url + "contact"} component={ContactPage} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(Router);
