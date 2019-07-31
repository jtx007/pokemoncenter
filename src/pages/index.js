import React from "react"
import { graphql } from 'gatsby';
import indexStyles from '../styles/index.module.css'
import Layout from '../components/layout'


export default ({ data }) => {
    
    return (
        <div>
            <Layout>
            
            </Layout>
            <h1 className={indexStyles.mainHeader}>{data.site.siteMetadata.title}</h1>
        </div>
    
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`