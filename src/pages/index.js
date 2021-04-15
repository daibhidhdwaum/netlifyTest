import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSeries {
        edges {
          node {
            series
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulSeries

  return (
    <div>
      {edges.map((edge, i) => {
        const { series } = edge.node
        return <div key={i}>{series}</div>
      })}
    </div>
  )
}
