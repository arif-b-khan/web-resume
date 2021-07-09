import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Certification from "../components/certificationItem";

export default props => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          certifications {
            name
            badge
            link
          }
        }
      }
    }
  `)

    const certifications = data.site.siteMetadata.certifications.map((item, index) => (
        <Certification
            key={index}
            name={item.name}
            badge={item.badge}
            link={item.link}
        />
    ))
    return (
        <Layout pageTitle="Certifications" pageDescription="Certifications">
            {certifications}
        </Layout>
    )
}
