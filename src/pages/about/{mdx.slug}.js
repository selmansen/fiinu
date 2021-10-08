import { graphql } from "gatsby"
import * as React from "react"


import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const AboutUserPage = ( { data } ) => {
  return (
    <Layout>
      <Seo title="About User" />
      <h2>{ data.mdx.frontmatter.title }</h2>

   </Layout>
  )
}

export default AboutUserPage

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    id
    frontmatter {
      number
      title
      position
    }
  }
}`