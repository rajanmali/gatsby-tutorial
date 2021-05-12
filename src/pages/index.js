import * as React from "react"
import HeroSection from "../components/HeroSection/index"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Explorer" />
    <HeroSection />
  </Layout>
)

export default IndexPage
