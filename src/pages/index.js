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

const SiteTitle = ({contentfulSiteTitle}) =>{
  return ( 
    <h1>{contentfulSiteTitle.titleText}</h1>
  )
}

const IndexPage = ({data}) => (
  <Layout>
    <SiteTitle contentfulSiteTitle={data.contentfulSiteTitle} />
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
	contentfulSiteTitle {
	  titleText
	}
}
`
