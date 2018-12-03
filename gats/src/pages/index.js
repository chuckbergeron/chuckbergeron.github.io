import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Hero from 'src/components/index/Hero'
import Layout from 'src/components/Layout'
import { rhythm } from 'src/utils/typography'

import 'src/assets/stylesheets/normalize.css'
import 'src/assets/stylesheets/skeleton.css'
import 'src/assets/stylesheets/highlight.css'
import 'src/assets/stylesheets/chuckbergeron.css.scss'

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <Hero />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
