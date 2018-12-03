import React from 'react'
import { Link } from 'gatsby'

//= require normalize
//= require skeleton
//= require highlight
//= require chuckbergeron

import { rhythm, scale } from 'src/utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div class="container">
          <div class="row">

            <div class="twelve columns">
              <a class="brand" href="/" title="Chuck Bergeron Wordmark">CHUCK BERGERON</a>

                <ul class="nav work-layout--nav">
                  <li class="nav--list-item">
                    <a class="nav--link" href="/" title="Learn more about me">About</a>
                  </li>
                  <li class="nav--list-item">
                    <a class="nav--link" href="/work/index.html" title="See my work">Work</a>
                  </li>
                  <li class="nav--list-item">
                    <a class="nav--link" href="/#contact" title="Contact me">Contact</a>
                  </li>
                  <li class="nav--list-item">
                    <a class="nav--link" href="/blog" title="Read my words">Blog</a>
                  </li>
                </ul>

            </div>

          </div>
        </div>
      )
    } else {
      header = (
        <h3>
          <Link
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
