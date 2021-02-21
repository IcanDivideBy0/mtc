import React from "react";
import { Alert } from "@material-ui/lab";

import Layout from "components/Layout";

export default function NotFoundPage() {
  return (
    <Layout fixed padded>
      <Alert severity="error">Page introuvable.</Alert>
    </Layout>
  );
}
