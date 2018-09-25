import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPost = ({node}) =>{
  return ( 
    <li>
      <img src={node.featureImage.file.url} alt={node.featureImage.title}/>
      <Link to={node.slug}>{node.title}</Link>
      <div>{node.description.description}</div>
    </li>
  )
}

const IndexPage = ({data}) => (
  <Layout>
    <h1>hi</h1>
    <ul className='blog-post'>
    {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
    </ul>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql `
query pageQuery {
  allContentfulBlog (filter: {
    node_locale: {eq: "en-US"}
  }){
    edges{
      node{
        title
        slug
        description{
          description
        }
        featureImage {
          title
          file {
            url
          }
          }
      }
    }
  }
}
`
