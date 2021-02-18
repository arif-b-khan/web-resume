import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { rewriteUrl } from "../utils/common";
const ResumeLink = (props) => {
    const resume = useStaticQuery(graphql`
  {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`);

return (<p style={{fontWeight:"bold"}}>See the PDF version of my resume <a href={rewriteUrl(resume.allFile.edges[0].node.publicURL)} 
target="_blank" rel="noopener noreferrer">here</a></p>);
};

export default ResumeLink;
