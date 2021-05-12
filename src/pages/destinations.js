import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Destinations = () => (
  <Layout>
    <Seo title="Destinations" />
    <h1>Destinations</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default Destinations
