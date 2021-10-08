import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const About = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title="About" />

      {
        data.allMdx.nodes.map((node) => (
          <article key={node.frontmatter.number}>
            <h2>{node.frontmatter.title}</h2>
          </article>
        ))
      }

    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          number
        }
        body
        slug
      }
    }
  }`