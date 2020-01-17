import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Carousel } from "antd"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Carousel autoplay>
        <div>
          <BackgroundImage
            Tag="section"
            fluid={data.file.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            style={{
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          ></BackgroundImage>
        </div>
        <div>
          <BackgroundImage
            Tag="section"
            fluid={data.file.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            style={{
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          ></BackgroundImage>
        </div>
      </Carousel>
      <Link to="/page-2/">Ver</Link>
    </Layout>
  )
}

export default IndexPage
