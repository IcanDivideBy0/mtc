import React from "react";

import { Image, Layout } from "modules/common";

export default function HomePage() {
  return (
    <Layout>
      {Array.from({ length: 100 }, (v, k) => (
        <div key={k}>
          Hello <code>HomePage</code>!
        </div>
      ))}

      {/* <Image
        lazy
        lazyHeight={200}
        style={{ maxWidth: "100%" }}
        srcSet={[
          require("./images/stock-photo-320.jpg") + " 320w",
          require("./images/stock-photo-800.jpg") + " 800w",
        ].join(", ")}
        sizes="(max-width: 320px) 320px, 800px"
        src={require("./images/stock-photo-800.jpg")}
        alt=""
      /> */}

      <picture>
        <source
          media="(max-width: 320px)"
          srcSet={require("./images/stock-photo-320.jpg")}
        />
        <source
          media="(min-width: 800px)"
          srcSet={require("./images/stock-photo-800.jpg")}
        />
        <Image
          lazy
          lazyHeight={200}
          src={require("./images/stock-photo-800.jpg")}
          alt="Chris debout tenant sa fille Elva dans ses bras"
          style={{ maxWidth: "100%" }}
        />
      </picture>
    </Layout>
  );
}
