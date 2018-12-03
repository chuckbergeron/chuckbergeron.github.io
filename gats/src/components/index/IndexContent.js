import React from 'react'
import Img from "gatsby-image"

class IndexContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="projects" className="portfolio-container">
          <div className="container">

            <h6 className="portfolio-category--title">
              Apps:
            </h6>
            <div className="row">
              <div className="four columns">
                <a href="/work/goodbits" className="portfolio--img-link">
                <Img
                  fluid={this.props.data.goodbitsApp.childImageSharp.fluid}
                  className="img-responsive portfolio-piece--img"
                  alt='Goodbits landing page'
                />

                </a>
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title"><a href="/work/goodbits">Goodbits</a></strong>
                  <br />
                  <em className="portfolio--method">Programming, Design</em>
                  <br />
                  <br />
                  Full stack dev &amp; design on Goodbits, an app to easily send email marketing campaigns.
                  <br />
                  <a href="/work/goodbits">Read More</a>
                </p>
              </div>
              <div className="four columns">
                <a href="/work/medeo" className="portfolio--img-link">
                  <Img
                    fluid={this.props.data.medeoThumbnail.childImageSharp.fluid}
                    className="img-responsive portfolio-piece--img"
                    alt="Medeo app"
                  />
                </a>
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title"><a href="/work/medeo">Medeo</a></strong>
                  <br />
                  <em className="portfolio--method">Full Stack Programming</em>
                  <br />
                  <br />
                  A secure, quality telemedecine platform &mdash; connecting patients w/ doctors by video.
                  <br />
                  <a href="/work/medeo">Read More</a>
                </p>
              </div>
              <div className="four columns">
                <a href="http://loft47.com/" className="portfolio--img-link">
                  <Img
                    fluid={this.props.data.loft47Screenshot1.childImageSharp.fluid}
                    className="img-responsive portfolio-piece--img"
                    alt="Loft47 App Screenshot"
                  />
                </a>
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title"><a href="http://www.loft47.com/">Loft47</a></strong>
                  <br />
                  <em className="portfolio--method">Programming, Design</em>
                  <br />
                  <br />
                  Loft47 exists to make accounting easier for real estate agents &amp; brokerages.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div id="testimonials" className="testimonials--container testimonials--container--dark">
          <div className="testimonial-top testimonial-top--dark hide-on-mobile">&nbsp;</div>
          <div className="testimonial-bottom testimonial-bottom--light hide-on-mobile">&nbsp;</div>

          <div className="container">
            <div className="row">
              <div className="twelve columns">

                <div className="testimonial is-purple">
                  <blockquote>
                    <p>
                      "Chuck is one of those rare individuals that can go from brainstorming ideas, to designing prototypes, to building a functioning version, to finally branding and marketing the finished product. One of the best people I’ve ever worked with. Full stop."
                    </p>
                  </blockquote>

                  <div className="testimonial-author clear-both">
                    <Img
                      alt="Josh Pinter's photo"
                      fluid={this.props.data.joshPinter.childImageSharp.fluid}
                      className="pull-left testimonial-author--avatar"
                    />

                    <div className="pull-left testimonial-author--name">
                      <span className="testimonial-name">Joshua Pinter</span>
                      <span className="testimonial-post">Product Manager, CNTRAL Inc</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>






        <div className="portfolio-container portfolio-container--light">
          <div className="container">

            <h6 className="portfolio-category--title">
              Gaming / VR:
            </h6>
            <div className="row">

              <div className="four columns">
                <a href="http://store.steampowered.com/app/629040" className="portfolio--img-link">
                <Img
                  fluid={this.props.data.sky.childImageSharp.fluid}
                  alt='Skytropolis City Building VR Sim'
                  className='img-responsive portfolio-piece--img border-color--dark'
                />
                </a>

                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title"><a href="http://store.steampowered.com/app/629040">Skytropolis</a></strong>
                  <br />
                  <em className="portfolio--method">Programming, 3D Artwork, SFX</em>
                  <br />
                  <br />
                  Available now on Steam for Windows &amp; Mac.
                  <br />
                  <a href="http://store.steampowered.com/app/629040">Steam Store Page</a>
                </p>
              </div>

              <div className="four columns">
                <a href="http://store.steampowered.com/app/423870" className="portfolio--img-link">
                  <Img
                    fluid={this.props.data.astervoid2000Logo.childImageSharp.fluid}
                    className="img-responsive portfolio-piece--img border-color--dark"
                    alt="Astervoid 2000 logo/artwork"
                  />
                </a>
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title"><a href="http://store.steampowered.com/app/423870">Astervoid 2000</a></strong>
                  <br />
                  <em className="portfolio--method">Programming, Music, SFX</em>
                  <br />
                  <br />
                  Available now on Steam for Windows, Mac &amp; Linux.
                  <br />
                  <a href="http://store.steampowered.com/app/423870">Steam Store Page</a>
                </p>
              </div>

            </div>

          </div>
        </div>


        <div className="testimonials--container">
          <div className="testimonial-top hide-on-mobile">&nbsp;</div>
          <div className="testimonial-bottom hide-on-mobile">&nbsp;</div>

          <div className="container">
            <div className="row">
              <div className="twelve columns">

                <div className="testimonial is-green">
                  <blockquote>
                    <p>
                      "Working with Chuck is a dream. He brings the perfect balance of design and function to the development of Loft47 and a great energy to the team."
                    </p>
                  </blockquote>

                  <div className="testimonial-author clear-both">
                    <Img
                      alt="Sasha Hryciuk photo"
                      fluid={this.props.data.sasha.childImageSharp.fluid}
                      className="pull-left testimonial-author--avatar"
                    />

                    <div className="pull-left testimonial-author--name">
                      <span className="testimonial-name">Sasha Hryciuk</span>
                      <span className="testimonial-post">Loft47 Director</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>



        <div className="portfolio-container">
          <div className="container">
            <h6 className="portfolio-category--title">
              Design:
            </h6>
            <div className="row">
              <div className="four columns">
                <Img
                  fluid={this.props.data.loft47BubbleLogoDiecut.childImageSharp.fluid}
                  className="img-responsive portfolio-piece--img"
                  alt="Loft47 Branding"
                />
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title">Loft47 Wordmark</strong>
                  <br />
                  <em className="portfolio--method">Sketchapp</em>
                </p>
              </div>
              <div className="four columns">
                <Img
                  fluid={this.props.data.goodbitsStickerBlue.childImageSharp.fluid}
                  className="img-responsive portfolio-piece--img"
                  alt="Goodbits bubble stickers"
                />
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title">Goodbits Bubble Stickers</strong>
                  <br />
                  <em className="portfolio--method">Sketchapp &amp; Adobe Illustrator</em>
                </p>
              </div>
              <div className="four columns">
                <Img
                  fluid={this.props.data.brewhouseLogo.childImageSharp.fluid}
                  className='image'
                />

                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title">Brewhouse Chemex Branding</strong>
                  <br />
                  <em className="portfolio--method">Adobe Illustrator</em>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="four columns">
                <Img
                  fluid={this.props.data.goodbitsHandtypeLogoWhiteOnBlack.childImageSharp.fluid}
                  className="img-responsive portfolio-piece--img"
                  alt="Goodbits handtype"
                />
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title">Goodbits Handtype</strong>
                  <br />
                  <em className="portfolio--method">Pen &amp; Paper, Sketchapp</em>
                </p>
              </div>
              <div className="four columns">
                <Img
                  fluid={this.props.data.vanrubySticks.childImageSharp.fluid}
                  className="img-responsive portfolio-piece--img"
                  alt="Vanruby Branding"
                />
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title">Vanruby Brand</strong>
                  <br />
                  <em className="portfolio--method">Adobe Illustrator</em>
                </p>
              </div>

            </div>

          </div>
        </div>


        <div className="testimonials--container testimonials--container--dark">
          <div className="testimonial-top testimonial-top--dark hide-on-mobile">&nbsp;</div>
          <div className="testimonial-bottom testimonial-bottom--light hide-on-mobile">&nbsp;</div>

          <div className="container">
            <div className="row">
              <div className="twelve columns">

                <div className="testimonial is-orange">
                  <blockquote>
                    <p>
                      "It's rare that you find someone with such a keen eye for design and the ability to think outside the box as Chuck. I was always excited to work with him because he showed such a unique passion for the problems we were solving for our customers."
                    </p>
                  </blockquote>

                  <div className="testimonial-author clear-both">
                    <Img
                      alt="Mark Hazlett's photo"
                      fluid={this.props.data.markHazlett.childImageSharp.fluid}
                      className="pull-left testimonial-author--avatar"
                    />

                    <div className="pull-left testimonial-author--name">
                      <span className="testimonial-name">Mark Hazlett</span>
                      <span className="testimonial-post">Product Manager, Clio</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="nine columns">

                <form validate='true' id="contact-form" encType="multipart/form-data" action="https://docs.google.com/a/chuckbergeron.io/forms/d/e/1FAIpQLSe964m5JEYeXkN0LOBcEUK1X8S9Xkdj-ENWYGxipzkun5E9WQ/formResponse" method="POST" acceptCharset="UTF-8" target="_self">
                  <h3>
                    Let's Work Together:
                  </h3>

                  <label htmlFor="name">YOUR NAME <span className="form-required">*</span></label>
                  <div>
                    <input id="name" type="text" name="entry.987659744" required className="u-full-width" />
                  </div>

                  <label htmlFor="email">YOUR EMAIL <span className="form-required">*</span></label>
                  <div>
                    <input id="email" type="email" name="emailAddress" required className="u-full-width" />
                  </div>

                  <label htmlFor="comment">COMMENT <span className="form-required">*</span></label>
                  <div>
                    <textarea id="comment" name="entry.2122743964" style={{ height: 150 }} required className="u-full-width"></textarea>
                  </div>

                  <div>
                    <input type="submit" className="button button-primary" value="Send" />
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}

export default IndexContent
