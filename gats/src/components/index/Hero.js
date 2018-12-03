import React from 'react'
import Img from "gatsby-image"

import { rhythm } from 'src/utils/typography'

class Hero extends React.Component {
  render() {
    return (
      <div>
        <Img
          fixed={this.props.data.profilePic.childImageSharp.fixed}
          className="hero-bg"
          style={{
            position: "absolute",
            left: 550,
            top: 30,
            width: "959px",
            height: "737px"
          }}
        />
        <div className="about">
          <div className="container">
            <div>
              <div className="six columns six-columns--tablet-override">
                <p>
                  Hey 👋 I'm Chuck, a software developer creating superb digital experiences.
                </p>
                <p>
                  I help dedicated organizations build amazing <a title="Article on Minimum Lovable Products" href="https://www.minutesmagazine.com/waynechang/how-to-build-an-unforgettable-first-time-user-experience/" rel="noopener noreferrer" target="_blank">MLPs</a>.
                </p>
                <p>
                  Lately I've been writing Ethereum smart contracts and developing DApps (UI frontends for the contracts).
                </p>
                <p>
                  <a className="button button-primary internal" href="#contact" title="Reach out and let's start a discussion">Let's Work Together</a> <a className="button internal" href="#projects" title="View some of my work">View Projects</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
