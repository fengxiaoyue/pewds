import React from "react";
//import { Link } from "gatsby";

import Layout from "../components/layout";
//import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="display">
      Subscribe
      <br />
      to
      <br />
      PewDiePie
    </h1>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw"
    >
      Go to PewDiePie's Channel
    </a>
  </Layout>
);

export default IndexPage;
