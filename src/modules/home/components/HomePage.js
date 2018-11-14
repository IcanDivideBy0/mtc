import React from "react";

import { Layout } from "modules/common";

export default function HomePage() {
  return (
    <Layout>
      {Array.from({ length: 200 }, (v, k) => (
        <div key={k}>
          Hello <code>HomePage</code>!
        </div>
      ))}
    </Layout>
  );
}
