import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
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
          meta={[
            {
              name: 'description',
              content: siteDescription,
            },
            {
              name: "description",
              content: "Chuck Bergeron creates apps, dapps, and VR experiences in Vancouver, BC."
            },
            {
              property: "og:description",
              content: "Chuck Bergeron creates apps, dapps, and VR experiences in Vancouver, BC."
            },
            {
              name: "keywords",
              content: "vr apps dapps websites design"
            },
            {
              property: "og:title",
              content: "ChuckBergeron.io -- Writings & Works"
            },

            {
              name: "author",
              content: "chuckbergeron.io"
            },
            {
              name: "copyright",
              content: "Chuck Bergeron"
            },

            {
              property: "og:site_name",
              content: "chuckbergeron"
            },
            {
              property: "og:url",
              content: `${data.siteUrl}${location.pathname}`
            },
            {
              property: "og:type",
              content: "business.business"
            },

            {
              property: "og:image",
              content: this.props.data.profilePic.childImageSharp.fixed
            },

            {
              property: "business:contact_data:street_address",
              content: "280 Nelson St - Suite #523"
            },
            {
              property: "business:contact_data:locality",
              content: "Vancouver, BC"
            },
            {
              property: "business:contact_data:postal_code",
              content: "V6B 2E2"
            },
            {
              property: "business:contact_data:country_name",
              content: "Canada"
            },

            {
              property: "twitter:card",
              content: "summary"
            },
            {
              property: "twitter:site",
              content: "@chuckbergeron"
            },
            {
              property: "twitter:image",
              content: `${data.siteUrl}{% asset_path chuck-bergeron--profile.jpg }`
            },
            {
              property: "twitter:url",
              content: `${data.siteUrl}${location.pathname}`
            },
          ]}
          link={
            [
              {
                rel: "stylesheet",
                href: "https://use.typekit.net/fme3two.css"
              },
              {
                rel: 'alternate',
                type: 'application/atom+xml',
                href: `${data.siteUrl}/index.xml`,
                title: `The Writings of Chuck Bergeron atom feed`
              }
            ]
          }
          title={siteTitle}
        />

        <Hero {...this.props} />

        <IndexContent {...this.props} />
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
    profilePic: file(relativePath: { eq: "chuck-bergeron--profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 959, height: 737) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    goodbitsApp: file(relativePath: { eq: "goodbits-app.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    medeoThumbnail: file(relativePath: { eq: "medeo-thumbnail.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    loft47Screenshot1: file(relativePath: { eq: "loft47-screenshot1.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    joshPinter: file(relativePath: { eq: "josh-pinter.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    astervoid2000Logo: file(relativePath: { eq: "astervoid-2000-logo.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    loft47BubbleLogoDiecut: file(relativePath: { eq: "loft47-bubble-logo-diecut.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    goodbitsStickerBlue: file(relativePath: { eq: "goodbits-sticker-blue.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    brewhouseLogo: file(relativePath: { eq: "brewhouse-logo.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    goodbitsHandtypeLogoWhiteOnBlack: file(relativePath: { eq: "goodbits-handtype-logo-white-on-black.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    vanrubySticks: file(relativePath: { eq: "vanruby-sticks.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    sky: file(relativePath: { eq: "sky.png" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    markHazlett: file(relativePath: { eq: "mark-hazlett.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    sasha: file(relativePath: { eq: "sasha.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 281) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

  }
`
