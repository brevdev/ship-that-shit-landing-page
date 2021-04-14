import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShipThatShit from "../images/svg/ship-that-sht.inline.svg";
import Ship from "../images/svg/ship.inline.svg";
import That from "../images/svg/that.inline.svg";
import Shit from "../images/svg/shit.inline.svg";
import Main from "../components/Main";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <LandingBio /> */}
    <Main />
  </Layout>
)

export default IndexPage
