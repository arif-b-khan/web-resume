import React from "react"
import Layout from "../components/layout"
import CompanyItem from "../components/companyItem";
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          experience {
            role
            when
            company
            where
            logo
            moreInfo
          }
        }
      }
    }
  `);


  const experience = data.site.siteMetadata.experience.map((item, index) => (
    <CompanyItem
      key={index}
      name={item.role}
      when={item.when}
      logo={item.logo}
      where={item.where}
      org={item.company}
      moreInfo={item.moreInfo}
    />
  ))

  return (
    <Layout
      pageTitle="Experience"
      pageDescription="Learn more about my experience"
    >
      {experience}
    </Layout>
  )
}
