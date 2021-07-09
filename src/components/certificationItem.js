import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { rewriteUrl } from "../utils/common";


const Certification = props => {
    const certs = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  const url = rewriteUrl(certs.allFile.edges.find(n => n.node.name === props.badge).node.publicURL)
    return (
        <table className="item-table">
            <tbody>
                <tr>
                    <td className="item-logo item-td1">
                        <a href={props.link}><img src={url}
                            alt={url}></img>
                            </a>
                    </td>
                    <td className="item-name item-td2">
                        <div style={{ marginLeft: "10px" }}>{props.name || ""}</div>
                    </td>
                    {/* <td className="item-when item-td3">{props.when || ""}
                        <br />
                        {props.where || ""}
                    </td> */}
                </tr>
                <tr>
                    <td
                        className="item-more-info"
                        colSpan={3}
                        dangerouslySetInnerHTML={{ __html: props.moreInfo }}
                    />
                </tr>
            </tbody>
        </table>
    )
}

export default Certification;